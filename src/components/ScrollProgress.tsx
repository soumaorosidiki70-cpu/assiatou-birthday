'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(255,255,255,0.05)',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #c9a84c, #e8c97a, #c9a84c)',
          width: `${progress * 100}%`,
          transition: 'width 0.1s linear',
          boxShadow: '0 0 8px rgba(201,168,76,0.6)',
        }}
      />
    </div>
  );
}
