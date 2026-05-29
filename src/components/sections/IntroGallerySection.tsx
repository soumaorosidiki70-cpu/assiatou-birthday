'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/SectionLabel';

const paragraphs = [
  `Tout ce que tu vas découvrir ici,\nje l'ai construit pour toi.\nChaque photo, chaque vidéo, chaque mot.\nPas en quelques minutes — avec du temps, avec du soin,\navec l'intention que tu mérites.`,
  `Parce que toi, tu ne mérites pas un message rapide.\nTu mérites qu'on s'arrête.\nQu'on prenne le temps de te dire\nà quel point tu comptes.`,
  `Ce site, c'est notre histoire.\nNos moments, nos souvenirs, notre chemin parcouru ensemble.\nJe voulais que tu les revoies tous,\nréunis en un seul endroit,\nrien que pour toi.`,
  `Bonne découverte, mon amour. 🖤`,
];

export default function IntroGallerySection() {
  return (
    <section
      style={{
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 60px)',
        background: 'var(--color-bg-secondary)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
        <SectionLabel text="Ce que tu vas voir" />

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
            marginBottom: '64px',
            lineHeight: 1.1,
          }}
        >
          Construit pour toi.
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: 'var(--font-lora)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.05rem, 2.4vw, 1.35rem)',
                lineHeight: 1.85,
                color: i === paragraphs.length - 1 ? 'var(--color-gold)' : 'var(--color-text-primary)',
                whiteSpace: 'pre-line',
                letterSpacing: '0.01em',
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
