'use client';

import { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
  const ringRef = useRef<HTMLDivElement>(null);

  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? 'Couper la musique' : 'Jouer la musique'}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.85)',
        border: '1px solid rgba(201,168,76,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'none',
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.9)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
    >
      {isPlaying ? (
        <>
          <div
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.6)',
              animation: 'ringPulse 1.5s ease-out infinite',
            }}
          />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 18V5l12-2v13" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="6" cy="18" r="3" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="18" cy="16" r="3" stroke="#c9a84c" strokeWidth="1.5"/>
          </svg>
        </>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="#a89880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="23" y1="9" x2="17" y2="15" stroke="#a89880" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="17" y1="9" x2="23" y2="15" stroke="#a89880" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
    </button>
  );
}
