import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../../config/contact';
import { certifications } from '../../config/certifications';
import { useLocale } from '../../lib/i18n';
import { brand } from '../../config/brand';
import { inquiryRows, inquirySummaryText, useInquiry } from '../../lib/inquiry';
import { isEmail, isNonEmpty, type FieldErrors } from '../../lib/validation';
import type { InquiryContactForm } from '../../data/types';

const EMPTY_FORM: InquiryContactForm = {
  name: '',
  company: '',
  email: '',
  country: '',
  certification: '',
  packaging: '',
  message: '',
};

const certificationOptions = (t: (k: string) => string) => [
  { value: '', label: t('quote.form.certification.none') },
  ...certifications.map((c) => ({ value: c.code, label: `${c.code} - ${c.name}` })),
  { value: 'Other / advise', label: 'Other - advise us' },
];

const packagingOptions = (t: (k: string) => string) => [
  { value: '', label: t('quote.form.packaging.standard') },
  { value: 'Retail-ready blister', label: t('quote.form.packaging.blister') },
  { value: 'Retail box', label: t('quote.form.packaging.box') },
  { value: 'Constructor pack', label: t('quote.form.packaging.constructor') },
  { value: 'Plain export carton', label: t('quote.form.packaging.plain') },
];

/**
 * Shared quote-request form.
 * Reads the inquiry basket, validates contact fields, and hands off honestly:
 * the site has no mail backend, so submission prepares a complete summary the
 * buyer sends from their own email/WhatsApp client, or copies for CRM entry.
 */
export function QuoteRequestForm({ note }: { note?: string }) {
  const { t } = useLocale();
  const inquiry = useInquiry();
  const rows = inquiryRows(inquiry.lines);
  const [form, setForm] = useState<InquiryContactForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [summary, setSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const footer = useMemo(
    () => `Prepared on ${brand.name} website · ${contact.email} · ${contact.phone}`,
    [],
  );

  const set = (key: keyof InquiryContactForm) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!isNonEmpty(form.name)) next.name = 'Please enter your name.';
    if (!isNonEmpty(form.email)) next.email = 'Please enter your business email.';
    else if (!isEmail(form.email)) next.email = 'That email address doesn’t look valid.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /* Group numbers follow visual order — the project group only exists with basket items. */
  const groupNo = rows.length > 0
    ? { project: '01', contact: '02', requirements: '03' }
    : { project: '', contact: '01', requirements: '02' };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSummary(inquirySummaryText(form, rows, footer));
    inquiry.submit(form);
  };

  const mailtoHref = summary
    ? `mailto:${contact.salesEmail}?subject=${encodeURIComponent(
        `Request for Quotation — ${form.company || form.name}`,
      )}&body=${encodeURIComponent(summary)}`
    : '#';

  const whatsappHref = summary
    ? `https://wa.me/${contact.whatsappHref.split('/wa.me/')[1]}?text=${encodeURIComponent(summary)}`
    : '#';

  const copySummary = async () => {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  /* ---------- Success / handoff state ---------- */
  if (summary) {
    return (
      <div className="quote-success">
        <div className="banner banner--success" role="status">
          <strong>Inquiry ready.</strong>
          <span>
            Your request has been prepared below. Because this template runs without a mail server,
            nothing was transmitted automatically — send it via your email app, WhatsApp, or copy it
            for your records.
          </span>
        </div>

        <div className="quote-success__actions">
          <a href={mailtoHref} className="btn btn--accent" target="_blank" rel="noreferrer">
            Open in Email App
          </a>
          <a href={whatsappHref} className="btn btn--outline" target="_blank" rel="noreferrer">
            Send via WhatsApp
          </a>
          <button type="button" className="btn btn--outline" onClick={copySummary}>
            {copied ? 'Copied ✓' : 'Copy Summary'}
          </button>
        </div>

        <pre className="quote-success__summary mono" aria-label="Inquiry summary">
          {summary}
        </pre>

        <div className="quote-success__foot">
          <p className="caption">
            Our sales team replies to {contact.salesEmail} {contact.responseTime}.
          </p>
          <div className="btn-row">
            <button
              type="button"
              className="btn btn--outline btn--sm"
              onClick={() => {
                setSummary(null);
                setCopied(false);
              }}
            >
              Edit Inquiry
            </button>
            <Link to="/products" className="btn btn--primary btn--sm" onClick={() => inquiry.clear()}>
              Finish — Back to Catalogue
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Form state — procurement intake ---------- */
  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate>
      {rows.length > 0 && (
        <section className="quote-group" aria-label="Products in this inquiry">
          <p className="quote-group__label mono">
            <span className="quote-group__index">{groupNo.project}</span>{t('quote.group.project')}
          </p>
          <ul className="quote-basket">
            {rows.map(({ product, quantity }) => (
              <li key={product.id} className="quote-basket__row">
                <div className="quote-basket__info">
                  <p className="quote-basket__name">
                    <Link to={`/products/${product.slug}`}>{product.name}</Link>
                  </p>
                  <p className="caption mono">{product.sku} · MOQ {product.moq}</p>
                </div>
                <div className="field quote-basket__qty">
                  <label htmlFor={`qty-${product.id}`} className="field__label">
                    Qty
                  </label>
                  <input
                    id={`qty-${product.id}`}
                    type="number"
                    min={1}
                    step={1}
                    value={quantity}
                    onChange={(e) => inquiry.setQuantity(product.id, Number(e.target.value))}
                  />
                </div>
                <button
                  type="button"
                  className="text-btn"
                  onClick={() => inquiry.remove(product.id)}
                  aria-label={`Remove ${product.name}`}
                >
                  Remove ✕
                </button>
              </li>
            ))}
          </ul>
          <p className="form-note">
            {t('quote.form.qtyNote')}
          </p>
        </section>
      )}

      {rows.length === 0 && note && <p className="form-note">{note}</p>}

      <section className="quote-group" aria-label="Contact details">
        <p className="quote-group__label mono">
          <span className="quote-group__index">{groupNo.contact}</span>{t('quote.group.contact')}
        </p>
        <div className="form-grid">
          <div className={`field ${errors.name ? 'field--error' : ''}`}>
            <label className="field__label" htmlFor="qf-name">
              {t('quote.form.name')} <span className="field__req" aria-hidden="true">*</span>
            </label>
            <input
              id="qf-name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => set('name')(e.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              placeholder="Jane Doe"
            />
            {errors.name && <p className="field__error">{errors.name}</p>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="qf-company">
              Company
            </label>
            <input
              id="qf-company"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(e) => set('company')(e.target.value)}
              placeholder="Acme Distribution LLC"
            />
          </div>

          <div className={`field ${errors.email ? 'field--error' : ''}`}>
            <label className="field__label" htmlFor="qf-email">
              {t('quote.form.email')} <span className="field__req" aria-hidden="true">*</span>
            </label>
            <input
              id="qf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => set('email')(e.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              placeholder="jane@acme.com"
            />
            {errors.email && <p className="field__error">{errors.email}</p>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="qf-country">
              {t('quote.form.country')}
            </label>
            <input
              id="qf-country"
              name="country"
              autoComplete="country-name"
              value={form.country}
              onChange={(e) => set('country')(e.target.value)}
              placeholder="United States"
            />
          </div>
        </div>
      </section>

      <section className="quote-group" aria-label="Requirements">
        <p className="quote-group__label mono">
          <span className="quote-group__index">{groupNo.requirements}</span>{t('quote.group.requirements')}
        </p>
        <div className="form-grid">
          <div className="field">
            <label className="field__label" htmlFor="qf-certification">
              {t('quote.form.certification')}
            </label>
            <select
              id="qf-certification"
              name="certification"
              value={form.certification}
              onChange={(e) => set('certification')(e.target.value)}
            >
              {certificationOptions(t).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="qf-packaging">
              {t('quote.form.packaging')}
            </label>
            <select
              id="qf-packaging"
              name="packaging"
              value={form.packaging}
              onChange={(e) => set('packaging')(e.target.value)}
            >
              {packagingOptions(t).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field form-grid__full">
            <label className="field__label" htmlFor="qf-message">
              {t('quote.form.message')}
            </label>
            <textarea
              id="qf-message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => set('message')(e.target.value)}
              placeholder={t('quote.form.messagePlaceholder')}
            />
          </div>
        </div>
      </section>

      <div className="quote-form__submit">
        <button type="submit" className="btn btn--accent btn--lg">
          {t('quote.form.submit')}
        </button>
        <p className="form-note">
          {t('quote.form.note')}
        </p>
      </div>
    </form>
  );
}
