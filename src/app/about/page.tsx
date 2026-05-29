'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blocs = [
  {
    photo: 'elle/WhatsApp Image 2026-05-29 at 18.11.13.jpeg',
    title: 'La Foi',
    text: `Assiatou est une femme profondément pieuse.\nSa religion n'est pas un accessoire — c'est son identité, sa force, son ancre.\nElle porte son voile avec une fierté tranquille,\nune élégance qui vient de l'intérieur.\nDans un monde qui pousse à tout montrer,\nelle a choisi la pudeur. Et elle le porte comme une couronne.`,
    reverse: false,
  },
  {
    photo: 'elle/WhatsApp Image 2026-05-29 at 18.11.13 (1).jpeg',
    title: 'La Battante',
    text: `À son âge, elle n'attend pas.\nElle travaille. Elle construit. Elle assume.\nDes responsabilités que beaucoup fuient,\nelle les prend avec maturité et sérieux.\nL'esprit de l'entrepreneuriat coule dans ses veines —\nelle voit des opportunités là où d'autres voient des obstacles.`,
    reverse: true,
  },
  {
    photo: 'elle/WhatsApp Image 2026-05-29 at 18.11.14.jpeg',
    title: 'La Rareté',
    text: `Dans cette génération où tout le monde court après l'illusion,\nAssiatou a la tête sur les épaules.\nElle sait ce qu'elle veut. Elle sait qui elle est.\nElle ne se perd pas dans le bruit du monde.\nCes femmes-là sont rares.\nCes femmes-là sont précieuses.`,
    reverse: false,
  },
  {
    photo: 'elle/WhatsApp Image 2026-05-29 at 18.11.14 (1).jpeg',
    title: 'La Lumière',
    text: `Elle n'a pas besoin de crier pour qu'on la remarque.\nSa présence suffit.\nDouce mais déterminée. Discrète mais impactante.\nElle est le genre de femme qui élève les gens autour d'elle\nsans même s'en rendre compte.\nUne lumière dans un monde sombre.`,
    reverse: true,
  },
  {
    photo: 'elle/WhatsApp Image 2026-05-29 at 18.11.14 (2).jpeg',
    title: "Ce qu'elle représente",
    text: `Pour moi, Assiatou n'est pas juste la femme que j'aime.\nElle est la preuve vivante qu'il existe encore\ndes femmes de valeur, de caractère, de profondeur.\nElle est mon exemple. Mon inspiration.\nEt je remercie Allah chaque jour de l'avoir mise sur mon chemin.`,
    reverse: false,
  },
];

export default function AboutPage() {
  return (
    <main style={{ background: '#080808', minHeight: '100vh' }}>

      {/* INTRO — plein écran */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
          position: 'relative',
        }}
      >
        {/* Gold line top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          style={{
            position: 'absolute',
            top: '80px',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
            transformOrigin: 'center',
          }}
        />

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.4, delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.65rem',
            letterSpacing: '0.4em',
            color: 'rgba(201,168,76,0.55)',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          Dossier · Hommage
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            color: 'var(--color-text-primary)',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          Assiatou Sow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: 'clamp(0.65rem, 1.8vw, 0.85rem)',
            letterSpacing: '0.3em',
            color: 'var(--color-gold)',
            textTransform: 'uppercase',
            marginBottom: '72px',
          }}
        >
          Une femme de valeur
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          style={{
            width: '60px',
            height: '1px',
            background: 'rgba(201,168,76,0.5)',
            margin: '0 auto 64px',
          }}
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'var(--font-lora)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.8vw, 1.6rem)',
            lineHeight: 1.85,
            color: 'var(--color-text-primary)',
            maxWidth: '680px',
            whiteSpace: 'pre-line',
          }}
        >
          {`Dans une génération qui a perdu le nord,\nelle est la boussole.\nDans un monde de faux-semblants,\nelle est l'authenticité.\nVoici Assiatou Sow.`}
        </motion.blockquote>

        {/* Gold line bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
            transformOrigin: 'center',
          }}
        />
      </section>

      {/* BLOCS alternés */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(80px, 12vw, 140px)' }}>
          {blocs.map((bloc, i) => (
            <Bloc key={i} {...bloc} index={i} />
          ))}
        </div>
      </section>

      {/* OUTRO */}
      <section
        style={{
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
          background: 'rgba(201,168,76,0.04)',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          textAlign: 'center',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'var(--color-gold)',
            lineHeight: 1.2,
            marginBottom: '32px',
            textShadow: '0 0 60px rgba(201,168,76,0.2)',
          }}
        >
          Joyeux anniversaire à une femme extraordinaire.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: 'rgba(201,168,76,0.45)',
            textTransform: 'uppercase',
          }}
        >
          — De Conakry, avec tout l'amour du monde.
        </motion.p>
      </section>

      {/* Back link */}
      <div style={{ textAlign: 'center', padding: '60px 24px' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: 'rgba(201,168,76,0.35)',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          ← Notre Histoire
        </Link>
      </div>
    </main>
  );
}

function Bloc({
  photo,
  title,
  text,
  reverse,
  index,
}: {
  photo: string;
  title: string;
  text: string;
  reverse: boolean;
  index: number;
}) {
  const photoAnim = {
    initial: { opacity: 0, x: reverse ? 60 : -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  };
  const textAnim = {
    initial: { opacity: 0, x: reverse ? -60 : 60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
        gap: 'clamp(32px, 5vw, 72px)',
        alignItems: 'center',
        direction: reverse ? 'rtl' : 'ltr',
      }}
    >
      {/* Photo */}
      <motion.div
        initial={photoAnim.initial}
        whileInView={photoAnim.whileInView}
        viewport={{ once: true, margin: '-80px' }}
        transition={photoAnim.transition}
        style={{ direction: 'ltr' }}
      >
        <div
          style={{
            aspectRatio: '3/4',
            overflow: 'hidden',
            borderRadius: '4px',
            border: '1px solid rgba(201,168,76,0.2)',
            background: '#0d0d0d',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/media/${photo}`}
            alt={title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={textAnim.initial}
        whileInView={textAnim.whileInView}
        viewport={{ once: true, margin: '-80px' }}
        transition={textAnim.transition}
        style={{ direction: 'ltr' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'rgba(201,168,76,0.5)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          0{index + 1}
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: 'var(--color-gold)',
            lineHeight: 1.1,
            marginBottom: '28px',
          }}
        >
          {title}
        </h2>

        <div
          style={{
            width: '32px',
            height: '1px',
            background: 'rgba(201,168,76,0.4)',
            marginBottom: '28px',
          }}
        />

        <p
          style={{
            fontFamily: 'var(--font-lora)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            lineHeight: 1.9,
            color: 'var(--color-text-primary)',
            whiteSpace: 'pre-line',
          }}
        >
          {text}
        </p>
      </motion.div>
    </div>
  );
}
