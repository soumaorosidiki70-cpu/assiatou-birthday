'use client';

import { motion } from 'framer-motion';

interface GoldDividerProps {
  className?: string;
}

export default function GoldDivider({ className = '' }: GoldDividerProps) {
  return (
    <motion.div
      className={`flex items-center gap-4 w-full ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.3)' }} />
      <div
        style={{
          width: '8px',
          height: '8px',
          background: 'var(--color-gold)',
          transform: 'rotate(45deg)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.3)' }} />
    </motion.div>
  );
}
