'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
  vr: number;
};

const COLORS = ['#c9a84c', '#e8c97a', '#8a6a20', '#f5f0e8', '#c9a84c'];

export default function OutroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  const spawnParticle = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    particlesRef.current.push({
      x: Math.random() * canvas.width,
      y: -20,
      vx: (Math.random() - 0.5) * 1.2,
      vy: Math.random() * 1.5 + 0.8,
      size: Math.random() * 6 + 2,
      opacity: Math.random() * 0.6 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      vr: (Math.random() - 0.5) * 3,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let spawnTimer = 0;

    const animate = (t: number) => {
      if (t - spawnTimer > 80) {
        spawnParticle();
        spawnTimer = t;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vr;
        p.opacity -= 0.002;
        if (p.y > canvas.height + 20 || p.opacity <= 0) return false;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [spawnParticle]);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg-primary)',
        overflow: 'hidden',
        padding: '80px clamp(20px, 5vw, 60px)',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <SectionLabel text="Pour toujours" />

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          animate={{ scale: [1, 1.02, 1] }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            color: 'var(--color-gold)',
            textShadow: '0 0 80px rgba(201,168,76,0.3)',
            lineHeight: 1,
            marginTop: '32px',
            animation: 'glow 3s ease-in-out infinite',
          }}
        >
          Joyeux Anniversaire
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: 'clamp(0.7rem, 2vw, 1rem)',
            letterSpacing: '0.3em',
            color: 'rgba(201,168,76,0.7)',
            marginTop: '24px',
            textTransform: 'uppercase',
          }}
        >
          Assiatou Sow · 29 Mai
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            fontFamily: 'var(--font-lora)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
            color: 'var(--color-text-secondary)',
            marginTop: '32px',
          }}
        >
          "De Conakry avec tout mon amour."
        </motion.p>

        {/* SVG Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.3, type: 'spring', bounce: 0.4 }}
          style={{ marginTop: '60px', animation: 'heartBeat 2s ease-in-out infinite' }}
        >
          <svg width="60" height="54" viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 52C30 52 3 35 3 18C3 10.268 9.268 4 17 4C21.5 4 25.5 6.2 28 9.5C29 10.8 30 10.8 31 9.5C33.5 6.2 37.5 4 42 4C49.732 4 56 10.268 56 18C56 35 30 52 30 52Z"
              stroke="#c9a84c"
              strokeWidth="2"
              fill="rgba(201,168,76,0.15)"
            />
          </svg>
        </motion.div>

        {/* Lanzeni signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: 'rgba(201,168,76,0.4)',
            marginTop: '48px',
            textTransform: 'uppercase',
          }}
        >
          — Lanzeni Soumaoro
        </motion.p>

        {/* Surprise link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 2.2 }}
          style={{ marginTop: '80px' }}
        >
          <Link
            href="/surprise"
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'rgba(201,168,76,0.35)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(201,168,76,0.75)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(201,168,76,0.35)'; }}
          >
            Il y a encore quelque chose... 👀
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
