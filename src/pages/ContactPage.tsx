import { useState } from 'react';
import type { FormEvent } from 'react';
import { contact } from '../config/contact';
import { company } from '../config/company';
import { faqs } from '../config/certifications';
import { isEmail, isNonEmpty, type FieldErrors } from '../lib/validation';
import { usePageMeta } from '../lib/seo';

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const EMPTY: ContactFormState = { name: '', email: '', company: '', subject: '', message: '' };

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: `Contact NOVA INDUSTRIAL — email ${contact.email}, phone ${contact.phone}, WhatsApp and factory address in Wenzhou, China. Sales replies within one business day.`,
    path: '/contact',
  });

  const [form, setForm] = useState<ContactFormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof ContactFormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: FieldErrors = {};
    if (!isNonEmpty(form.name)) next.name = 'Please enter your name.';
    if (!isNonEmpty(form.email)) next.email = 'Please enter your email.';
    else if (!isEmail(form.email)) next.email = 'That email address doesn’t look valid.';
    if (!isNonEmpty(form.message)) next.message = 'Please add a short message.';
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  };

  const summary = [
    'CONTACT MESSAGE',
    '——————————————————————————',
    `Name: ${form.name}`,
    `Company: ${form.company || '—'}`,
    `Email: ${form.email}`,
    `Subject: ${form.subject || 'General inquiry'}`,
    '',
    form.message || '—',
    '',
    `— sent via novaindustrial.com contact form · ${company.legalName}`,
  ].join('\n');

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    form.subject || 'Website contact form',
  )}&body=${encodeURIComponent(summary)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">Contact</p>
          <h1 className="h1">Talk to the factory floor.</h1>
          <p className="lead">
            Sales engineers answer every message {contact.responseTime} — for quotations, samples,
            OEM projects or documentation requests.
          </p>
        </div>
      </div>

      <div className="container section contact-page__layout">
        {/* Contact channels */}
        <aside className="contact-page__channels">
          <div className="info-card">
            <h2 className="h4">Direct</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-list__label mono">Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="contact-list__label mono">Sales</span>
                <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
              </li>
              <li>
                <span className="contact-list__label mono">Phone</span>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </li>
              <li>
                <span className="contact-list__label mono">WhatsApp</span>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                  {contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>
          <div className="info-card">
            <h2 className="h4">Factory address</h2>
            <address>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="caption">{contact.businessHours}</p>
          </div>
        </aside>

        {/* Form */}
        <div className="contact-page__form">
          {sent ? (
            <div className="quote-success">
              <div className="banner banner--success" role="status">
                <strong>Message prepared.</strong>
                <span>
                  This template has no mail backend, so nothing was transmitted automatically — send
                  it via your email app or copy it for your records.
                </span>
              </div>
              <div className="quote-success__actions">
                <a href={mailto} className="btn btn--accent" target="_blank" rel="noreferrer">
                  Open in Email App
                </a>
                <button type="button" className="btn btn--outline" onClick={copy}>
                  {copied ? 'Copied ✓' : 'Copy Message'}
                </button>
              </div>
              <pre className="quote-success__summary mono">{summary}</pre>
              <div className="quote-success__foot">
                <button
                  type="button"
                  className="btn btn--outline btn--sm"
                  onClick={() => {
                    setSent(false);
                    setCopied(false);
                  }}
                >
                  Edit Message
                </button>
              </div>
            </div>
          ) : (
            <form className="quote-form" onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className={`field ${errors.name ? 'field--error' : ''}`}>
                  <label className="field__label" htmlFor="cf-name">
                    Name <span className="field__req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set('name')(e.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <p className="field__error">{errors.name}</p>}
                </div>
                <div className="field">
                  <label className="field__label" htmlFor="cf-company">
                    Company
                  </label>
                  <input
                    id="cf-company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => set('company')(e.target.value)}
                  />
                </div>
                <div className={`field ${errors.email ? 'field--error' : ''}`}>
                  <label className="field__label" htmlFor="cf-email">
                    Email <span className="field__req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set('email')(e.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <p className="field__error">{errors.email}</p>}
                </div>
                <div className="field">
                  <label className="field__label" htmlFor="cf-subject">
                    Subject
                  </label>
                  <select id="cf-subject" value={form.subject} onChange={(e) => set('subject')(e.target.value)}>
                    <option value="">General inquiry</option>
                    <option value="Quotation request">Quotation request</option>
                    <option value="Samples">Samples</option>
                    <option value="OEM / ODM project">OEM / ODM project</option>
                    <option value="Documentation">Documentation & certifications</option>
                  </select>
                </div>
                <div className={`field form-grid__full ${errors.message ? 'field--error' : ''}`}>
                  <label className="field__label" htmlFor="cf-message">
                    Message <span className="field__req" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => set('message')(e.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <p className="field__error">{errors.message}</p>}
                </div>
              </div>
              <div className="quote-form__submit">
                <button type="submit" className="btn btn--accent btn--lg">
                  Send Message
                </button>
                <p className="form-note">
                  Your message is prepared as a complete draft — nothing is sent without your
                  confirmation.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div className="section section--muted" id="faq">
        <div className="container">
          <div className="section-head">
            <div className="section-head__main">
              <p className="eyebrow">FAQ</p>
              <h2 className="h2">Buyer questions, answered directly.</h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question} className="faq-item">
                <summary className="faq-item__q">{item.question}</summary>
                <p className="faq-item__a body-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
