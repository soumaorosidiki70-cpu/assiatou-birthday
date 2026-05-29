'use client';

import { motion } from 'framer-motion';

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        fontFamily: 'var(--font-cinzel)',
        fontSize: '0.7rem',
        letterSpacing: '0.3em',
        color: 'var(--color-gold)',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--color-gold)', flexShrink: 0 }} />
      {text}
    </motion.p>
  );
}
