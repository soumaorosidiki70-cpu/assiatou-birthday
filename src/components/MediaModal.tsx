'use client';

import { useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { MediaItem } from '@/types/media';

interface MediaModalProps {
  items: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onVideoPlay?: () => void;
  onVideoClose?: () => void;
}

export default function MediaModal({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onVideoPlay,
  onVideoClose,
}: MediaModalProps) {
  const current = items[currentIndex];

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  useEffect(() => {
    if (current?.type === 'video' && onVideoPlay) {
      onVideoPlay();
    }
    return () => {
      if (current?.type === 'video' && onVideoClose) {
        onVideoClose();
      }
    };
  }, [currentIndex]);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.97)',
          zIndex: 50000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(12px)',
        }}
      >
        <motion.div
          key={current.id}
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={e => e.stopPropagation()}
          style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {current.type === 'photo' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/media/${current.filename}`}
              alt={current.caption || 'Photo'}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '4px',
              }}
            />
          ) : (
            <video
              src={`/media/${current.filename}`}
              controls
              autoPlay
              playsInline
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: '4px',
                background: '#000',
              }}
            />
          )}
        </motion.div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(201,168,76,0.4)',
            color: '#c9a84c',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'none',
          }}
        >
          ✕
        </button>

        {/* Nav prev */}
        {currentIndex > 0 && (
          <button
            onClick={e => { e.stopPropagation(); onPrev(); }}
            aria-label="Précédent"
            style={{
              position: 'fixed',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: '#c9a84c',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none',
            }}
          >
            ‹
          </button>
        )}

        {/* Nav next */}
        {currentIndex < items.length - 1 && (
          <button
            onClick={e => { e.stopPropagation(); onNext(); }}
            aria-label="Suivant"
            style={{
              position: 'fixed',
              right: '80px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: '#c9a84c',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none',
            }}
          >
            ›
          </button>
        )}

        {/* Counter */}
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'rgba(201,168,76,0.6)',
          }}
        >
          {currentIndex + 1} / {items.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
