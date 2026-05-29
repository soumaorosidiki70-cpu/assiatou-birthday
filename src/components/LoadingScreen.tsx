'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAME = 'Assiatou';

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#080808',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {/* Name letter by letter */}
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            {NAME.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  fontSize: 'clamp(4rem, 14vw, 10rem)',
                  color: '#c9a84c',
                  lineHeight: 1,
                  letterSpacing: '0.05em',
                  textShadow: '0 0 60px rgba(201,168,76,0.4)',
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              width: '240px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
              transformOrigin: 'center',
            }}
          />

          {/* Sub label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.65rem',
              letterSpacing: '0.4em',
              color: 'rgba(201,168,76,0.5)',
              textTransform: 'uppercase',
            }}
          >
            29 Mai · Joyeux Anniversaire
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
