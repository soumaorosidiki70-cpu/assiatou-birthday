'use client';

import { motion } from 'framer-motion';
import GoldDivider from '@/components/GoldDivider';
import SectionLabel from '@/components/SectionLabel';

const strophes = [
  `Tu n'es pas juste une fille que j'aime.\nTu es la preuve que certaines choses dans la vie\nne s'expliquent pas.\nElles se vivent, elles se ressentent,\nelles vous changent sans prévenir.`,
  `Je t'ai vue avant de te connaître.\nJe t'ai connue avant de te comprendre.\nEt depuis que je te comprends,\nje sais que je ne veux comprendre personne d'autre.`,
  `Tu m'as fait confiance à une époque\noù tu n'avais plus confiance en rien.\nEt moi, cette confiance-là,\nje la porte comme quelque chose de sacré.`,
  `On a traversé des silences qui faisaient mal.\nDes distances qui pesaient lourd.\nMais à chaque fois, on est revenus l'un vers l'autre.\nParce que certaines personnes,\non ne sait pas les quitter vraiment.`,
  `Tu es simple dans un monde compliqué.\nTu es vraie dans une époque de faux-semblants.\nTu es rare, Assiatou.\nEt les choses rares, on les garde.\nOn les protège.\nOn les chérit.`,
  `Alors aujourd'hui et tous les jours qui suivront,\nsache que tu es vue.\nQue tu es reconnue.\nQue tu es aimée.\nProfondément, sincèrement, pour toujours.`,
];

export default function PoemSection() {
  return (
    <section
      style={{
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 60px)',
        background: 'var(--color-bg-primary)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <SectionLabel text="Pour Toi" />
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
            Un poème pour toi.
          </motion.h2>
        </div>

        <GoldDivider className="mb-16" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {strophes.map((strophe, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: 'var(--font-lora)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                lineHeight: 1.9,
                color: 'var(--color-text-primary)',
                whiteSpace: 'pre-line',
                textAlign: 'center',
                letterSpacing: '0.01em',
              }}
            >
              {strophe}
            </motion.p>
          ))}
        </div>

        <GoldDivider className="mt-16" />
      </div>
    </section>
  );
}
