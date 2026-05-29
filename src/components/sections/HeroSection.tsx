'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getHeroBg } from '@/config/media';

const NAME = 'Assiatou';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const heroBg = getHeroBg();

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#080808',
      }}
    >
      {/* Background photo with parallax */}
      {heroBg && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: bgOpacity,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/media/${heroBg.filename}`}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center center',
            }}
          />
        </motion.div>
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.3) 100%)',
        }}
      />

      {/* Horizontal gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.3) 20%, rgba(201,168,76,0.3) 80%, transparent 100%)',
          transformOrigin: 'center',
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Main content */}
      <motion.div
        style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', y: textY }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.5, delay: 3.6 }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: 'clamp(0.5rem, 1.5vw, 0.75rem)',
            letterSpacing: '0.5em',
            color: 'rgba(201,168,76,0.7)',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          Pour toi, pour toujours
        </motion.p>

        {/* Name */}
        <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          {NAME.split('').map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 3.8 + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(5rem, 16vw, 13rem)',
                lineHeight: 0.9,
                color: '#f5f0e8',
                display: 'inline-block',
                animation: 'glow 3s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.8 }}
          style={{
            fontFamily: 'var(--font-lora)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
            color: 'var(--color-text-secondary)',
            marginTop: '28px',
            letterSpacing: '0.02em',
          }}
        >
          Le jour où tu es née a changé ma vie.
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5.2 }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: 'var(--color-gold)',
            marginTop: '20px',
            textTransform: 'uppercase',
          }}
        >
          29 Mai · Joyeux Anniversaire
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: 'rgba(201,168,76,0.5)',
            textTransform: 'uppercase',
          }}
        >
          Découvrir notre histoire
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'rgba(201,168,76,0.5)', fontSize: '1.2rem' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 12 + 10,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}
    >
      {particles.map(p => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: '#c9a84c',
          }}
          animate={{
            y: [0, -window?.innerHeight * 1.2 || -900],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
