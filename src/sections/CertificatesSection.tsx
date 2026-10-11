import { certifications } from '../config/certifications';
import { homeSections } from '../config/hero';
import { useLocale } from '../lib/i18n';
import { resolveCertificateScan } from '../config/media';
import { Media } from '../components/ui/Media';
import { EditorialVisual } from '../components/visuals/EditorialVisual';
import { SectionHead } from '../components/ui/SectionHead';

export function CertificatesSection() {
  const s = homeSections.certificates;
  const { locale } = useLocale();
  const isZh = locale === 'zh';

  return (
    <section className="section" aria-labelledby="certs-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={isZh && s.labelZh ? s.labelZh : s.label}
          title={isZh && s.titleZh ? s.titleZh : s.title}
          description={isZh && s.descriptionZh ? s.descriptionZh : s.description}
          align="between"
        />
        <div className="cert-gallery">
          {certifications.map((cert) => {
            const scan = resolveCertificateScan(cert.id);
            const name = isZh && cert.nameZh ? cert.nameZh : cert.name;
            return (
              <figure key={cert.id} className="cert-card" data-reveal>
                <div className="cert-card__media">
                  {scan ? (
                    <Media
                      src={scan.src}
                      alt={name}
                      aspectRatio="3 / 4"
                      fallback={<EditorialVisual subject="quality" title={name} />}
                    />
                  ) : (
                    <EditorialVisual subject="quality" title={name} />
                  )}
                </div>
                <figcaption className="cert-card__caption">
                  <span className="cert-card__code mono">{cert.code}</span>
                  <span className="cert-card__name">{name}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
