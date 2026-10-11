import { homeSections } from '../config/hero';
import { useLocale } from '../lib/i18n';
import { resolveFactoryTourMedia } from '../config/media';
import { Media } from '../components/ui/Media';
import { EditorialVisual, type EditorialSubject } from '../components/visuals/EditorialVisual';
import { SectionHead } from '../components/ui/SectionHead';

export function FactoryTourSection() {
  const s = homeSections.tour;
  const { locale } = useLocale();
  const isZh = locale === 'zh';
  const tourImages = resolveFactoryTourMedia();

  return (
    <section className="section section--muted" aria-labelledby="tour-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={isZh && s.labelZh ? s.labelZh : s.label}
          title={isZh && s.titleZh ? s.titleZh : s.title}
          description={isZh && s.descriptionZh ? s.descriptionZh : s.description}
          align="between"
        />
        <div className="tour-grid">
          {s.slots.map((slot, i) => {
            const asset = tourImages[i];
            const caption = isZh && slot.captionZh ? slot.captionZh : slot.caption;
            const subject = slot.subject as EditorialSubject;
            return (
              <figure key={i} className="tour-card" data-reveal>
                <div className="tour-card__media">
                  {asset ? (
                    <Media
                      src={asset.src}
                      alt={caption}
                      aspectRatio="4 / 3"
                      fallback={<EditorialVisual subject={subject} title={caption} />}
                    />
                  ) : (
                    <EditorialVisual subject={subject} title={caption} />
                  )}
                </div>
                <figcaption className="tour-card__caption mono">{caption}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
