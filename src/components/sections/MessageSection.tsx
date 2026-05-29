'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GoldDivider from '@/components/GoldDivider';
import SectionLabel from '@/components/SectionLabel';
import { getMessageBg } from '@/config/media';

const PARAGRAPHS = [
  'Assiatou,',
  'Il y a des personnes qu\'on rencontre et qu\'on oublie.\nEt puis il y a toi.',
  'Depuis le jour où j\'ai posé les yeux sur toi — sans même te parler —\nquelque chose en moi a su.\nPas tout de suite. Pas avec des mots.\nMais quelque chose a su.',
  'Tu traversais une tempête quand je t\'ai tendu la main.\nEt j\'aurais pu regarder ailleurs.\nMais comment regarder ailleurs quand c\'est toi ?',
  'Je t\'ai vue dans ta douleur.\nJe t\'ai vue dans ta force.\nEt je t\'ai aimée dans les deux.',
  'On a ri. On a pleuré. On s\'est perdus de vue.\nEt à chaque fois, on s\'est retrouvés.\nParce que ce qu\'on a, ça ne se perd pas vraiment.\nÇa attend, juste.',
  'Dans une génération qui court après des illusions,\ntoi tu es réelle.\nRéelle dans ta simplicité, dans ta loyauté,\ndans la façon dont tu me regardes quand tu penses que je ne vois pas.',
  'Tu m\'as fait confiance à une époque où tu n\'avais plus confiance en personne.\nEt moi, tu es la seule femme au monde — en dehors de ma mère —\nà qui je fais confiance les yeux fermés.',
  'Je ne sais pas tout ce que l\'avenir nous réserve.\nMais je sais que je veux que ce soit avec toi.\nLe mariage, la famille, les matins difficiles, les soirs heureux —\ntout ça, je le veux avec toi.',
  'Alors aujourd\'hui, le jour de ton anniversaire,\nje ne te donne pas un cadeau.\nJe te rappelle.\nJe te rappelle que tu comptes.\nQue tu as changé quelque chose en moi.\nQue sans toi, je serais différent — et sûrement moins bien.',
];

export default function MessageSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.15, 0.15, 0]);
  const msgBg = getMessageBg();

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 60px)',
        background: 'var(--color-bg-secondary)',
        overflow: 'hidden',
      }}
    >
      {/* Background photo */}
      {msgBg && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: bgOpacity,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/media/${msgBg.filename}`}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      )}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, var(--color-bg-secondary) 0%, rgba(17,17,17,0.7) 50%, var(--color-bg-secondary) 100%)',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <SectionLabel text="Ce Que Tu Es Pour Moi" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--color-text-primary)',
              marginTop: '16px',
            }}
          >
            Une lettre pour toi.
          </motion.h2>
        </div>

        <GoldDivider className="mb-16" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {PARAGRAPHS.map((para, i) => {
            const isFirst = i === 0;
            return (
              <motion.div key={i}>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    fontFamily: isFirst ? 'var(--font-cormorant)' : 'var(--font-lora)',
                    fontStyle: isFirst ? 'normal' : 'italic',
                    fontWeight: isFirst ? 400 : 400,
                    fontSize: isFirst ? 'clamp(1.6rem, 3vw, 2.2rem)' : 'clamp(1rem, 2vw, 1.25rem)',
                    color: isFirst ? 'var(--color-gold)' : 'var(--color-text-primary)',
                    lineHeight: 1.9,
                    whiteSpace: 'pre-line',
                    letterSpacing: isFirst ? '0.05em' : '0.01em',
                  }}
                >
                  {para}
                </motion.p>
                {i < PARAGRAPHS.length - 1 && (
                  <div
                    style={{
                      marginTop: '32px',
                      height: '1px',
                      background: 'rgba(201,168,76,0.1)',
                    }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                color: 'var(--color-gold)',
                textShadow: '0 0 60px rgba(201,168,76,0.3)',
                lineHeight: 1.2,
              }}
            >
              Joyeux anniversaire, Assiatou Sow.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-lora)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--color-text-secondary)',
                marginTop: '12px',
              }}
            >
              Tu mérites tout.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '0.75rem',
                letterSpacing: '0.35em',
                color: 'var(--color-gold)',
                marginTop: '32px',
                textTransform: 'uppercase',
              }}
            >
              — Lanzeni
            </p>
          </motion.div>
        </div>

        <GoldDivider className="mt-16" />
      </div>
    </section>
  );
}
