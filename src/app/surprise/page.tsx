'use client';

import { motion } from 'framer-motion';
import type { Transition, TargetAndTransition } from 'framer-motion';
import Link from 'next/link';

const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const cards: {
  id: number;
  title: string;
  text: string;
  animation: { initial: TargetAndTransition; whileInView: TargetAndTransition; transition: Transition };
  accent: string;
  border: string;
}[] = [
  {
    id: 1,
    title: 'En public...',
    text: 'Sage. Discrète. Souriante. Irréprochable.\nLa fille parfaite que tout le monde admire. 😇',
    animation: {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.7, type: 'spring', bounce: 0.35 } as Transition,
    },
    accent: 'rgba(201,168,76,0.12)',
    border: 'rgba(201,168,76,0.3)',
  },
  {
    id: 2,
    title: 'Quand on est seuls...',
    text: 'Satan se réveille. 😈\nUne vraie démone. Une folle complète.\nEt franchement ? C\'est pour ça que je t\'aime. 💀',
    animation: {
      initial: { opacity: 0, rotate: -6, scale: 0.9 },
      whileInView: { opacity: 1, rotate: 0, scale: 1 },
      transition: { duration: 0.8, type: 'spring', bounce: 0.45 } as Transition,
    },
    accent: 'rgba(180,40,40,0.08)',
    border: 'rgba(200,60,60,0.35)',
  },
  {
    id: 3,
    title: 'Le front 👀',
    text: 'On va pas en parler... \nOu plutôt si. \nSache que j\'apprends à faire des baby hairs.\nSpécialement pour toi.\nT\'as plus d\'excuse. 😂',
    animation: {
      initial: { opacity: 0, x: -80 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.7, type: 'spring', bounce: 0.4 } as Transition,
    },
    accent: 'rgba(201,168,76,0.08)',
    border: 'rgba(201,168,76,0.25)',
  },
  {
    id: 4,
    title: 'Mais sérieusement...',
    text: 'Démone ou pas, front ou pas —\nt\'es la personne la plus authentique que je connaisse.\nEt cette version de toi que le monde ne voit pas,\ncelle que tu me montres quand on est seuls ?\nC\'est ma préférée. 🖤',
    animation: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: easing } as Transition,
    },
    accent: 'rgba(201,168,76,0.12)',
    border: 'rgba(201,168,76,0.4)',
  },
];

export default function SurprisePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#080808',
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 60px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ alignSelf: 'flex-start', marginBottom: '60px' }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: 'rgba(201,168,76,0.5)',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          ← Retour
        </Link>
      </motion.div>

      {/* Page title */}
      <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px' }}>
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.4, delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            color: 'rgba(201,168,76,0.6)',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Dossier confidentiel
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontSize: 'clamp(2.2rem, 7vw, 6rem)',
            color: 'var(--color-text-primary)',
            lineHeight: 1.1,
          }}
        >
          La vérité sur Assiatou Sow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            fontFamily: 'var(--font-lora)',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'rgba(201,168,76,0.5)',
            marginTop: '16px',
          }}
        >
          😇
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)',
            marginTop: '48px',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          width: '100%',
          maxWidth: '680px',
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={card.animation.initial}
            whileInView={card.animation.whileInView}
            viewport={{ once: true, margin: '-60px' }}
            transition={card.animation.transition}
            style={{
              background: card.accent,
              border: `1px solid ${card.border}`,
              borderRadius: '6px',
              padding: 'clamp(28px, 5vw, 48px)',
              position: 'relative',
            }}
          >
            {/* Card number */}
            <span
              style={{
                position: 'absolute',
                top: '16px',
                right: '20px',
                fontFamily: 'var(--font-cinzel)',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: 'rgba(201,168,76,0.3)',
              }}
            >
              0{card.id}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 400,
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                color: 'var(--color-gold)',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-lora)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                lineHeight: 1.8,
                color: 'var(--color-text-primary)',
                whiteSpace: 'pre-line',
              }}
            >
              {card.text}
            </p>
          </motion.div>
        ))}

        {/* Finale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3, delay: 0.1 }}
          style={{
            textAlign: 'center',
            padding: 'clamp(48px, 8vw, 80px) clamp(28px, 5vw, 48px)',
            border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '6px',
            background: 'rgba(201,168,76,0.06)',
            marginTop: '24px',
          }}
        >
          <motion.p
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              color: 'var(--color-gold)',
              lineHeight: 1.2,
              textShadow: '0 0 60px rgba(201,168,76,0.3)',
              animation: 'glow 3s ease-in-out infinite',
            }}
          >
            Joyeux anniversaire Satan. 😈🖤
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              color: 'rgba(201,168,76,0.5)',
              marginTop: '32px',
              textTransform: 'uppercase',
            }}
          >
            — Lanzeni
          </motion.p>
        </motion.div>
      </div>

      {/* Back to site */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ marginTop: '100px' }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: 'rgba(201,168,76,0.4)',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          ← Retour au site
        </Link>
      </motion.div>
    </main>
  );
}
