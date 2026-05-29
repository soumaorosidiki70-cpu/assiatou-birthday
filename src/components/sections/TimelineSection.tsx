'use client';

import { motion } from 'framer-motion';
import GoldDivider from '@/components/GoldDivider';
import SectionLabel from '@/components/SectionLabel';

const TIMELINE = [
  {
    year: '2022',
    title: 'La première fois que je t\'ai vue',
    text: 'J\'avais changé d\'école. Je te voyais. Tu me voyais. Mais on ne se parlait pas encore. Quelque chose dans ton regard me disait que tu étais différente. J\'ai attendu.',
  },
  {
    year: 'Vacances 2023',
    title: 'La première conversation',
    text: 'C\'était pendant les vacances. On a enfin parlé. Et dès ce moment-là, je savais que quelque chose avait changé. Ta voix, ta façon d\'être — je ne pouvais plus regarder ailleurs.',
  },
  {
    year: '2023',
    title: 'Je t\'ai tendu la main',
    text: 'Tu traversais quelque chose de difficile. Une relation qui t\'avait brisée, une douleur que tu portais seule depuis trop longtemps. Je ne t\'ai pas abandonnée. J\'étais là. Et je serai toujours là.',
  },
  {
    year: '2023',
    title: 'Le couple parfait de l\'école',
    text: 'Tu es venue dans mon école. Et on était inséparables. Tout le monde nous voyait. On s\'offrait des choses, on se souriait dans les couloirs. Tu étais la plus belle, et tu étais à moi.',
  },
  {
    year: 'Le moment difficile',
    title: 'Séparés, mais jamais vraiment',
    text: 'Il y a eu une période où on ne se parlait plus. Les silences faisaient mal. Mais je n\'ai pas lâché. Parce qu\'on ne lâche pas quelqu\'un comme toi. Et tu es revenue. Et tout s\'est expliqué.',
  },
  {
    year: 'Aujourd\'hui',
    title: 'Plus forts que jamais',
    text: 'On a survécu à tout. Les doutes, les distances, les moments durs. Et on est là. Ensemble. Plus solides, plus certains. Ce que je sais avec certitude : c\'est toi.',
  },
];

const cardVariants = {
  hidden: (isLeft: boolean) => ({ opacity: 0, x: isLeft ? -60 : 60 }),
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' as const } },
};

export default function TimelineSection() {
  return (
    <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: 'var(--color-bg-primary)', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 60px)' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <SectionLabel text="Notre Histoire" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--color-text-primary)',
              marginTop: '16px',
              lineHeight: 1.1,
            }}
          >
            Nous deux, depuis le début.
          </motion.h2>
        </div>

        <GoldDivider className="mb-16" />

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3) 10%, rgba(201,168,76,0.3) 90%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {TIMELINE.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  custom={isLeft}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 40px 1fr',
                    alignItems: 'center',
                    gap: '0',
                  }}
                >
                  {/* Left slot */}
                  <div style={{ gridColumn: isLeft ? '1' : '3', gridRow: 1 }}>
                    <TimelineCard entry={entry} />
                  </div>

                  {/* Center dot */}
                  <div
                    style={{
                      gridColumn: '2',
                      gridRow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'var(--color-gold)',
                        border: '2px solid var(--color-bg-primary)',
                        boxShadow: '0 0 16px rgba(201,168,76,0.5)',
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Right slot (empty when card is on right) */}
                  {!isLeft && <div style={{ gridColumn: '1', gridRow: 1 }} />}
                  {isLeft && <div style={{ gridColumn: '3', gridRow: 1 }} />}
                </motion.div>
              );
            })}
          </div>
        </div>

        <GoldDivider className="mt-16" />
      </div>
    </section>
  );
}

function TimelineCard({ entry }: { entry: typeof TIMELINE[0] }) {
  return (
    <div
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid rgba(201,168,76,0.15)',
        borderRadius: '4px',
        padding: 'clamp(20px, 3vw, 32px)',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)')}
    >
      <p
        style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: '0.65rem',
          letterSpacing: '0.25em',
          color: 'var(--color-gold)',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        {entry.year}
      </p>
      <h3
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontWeight: 700,
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          color: 'var(--color-text-primary)',
          marginBottom: '16px',
          lineHeight: 1.2,
        }}
      >
        {entry.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-lora)',
          fontStyle: 'italic',
          fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.8,
        }}
      >
        {entry.text}
      </p>
    </div>
  );
}
