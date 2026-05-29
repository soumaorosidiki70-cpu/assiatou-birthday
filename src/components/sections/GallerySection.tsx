'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GoldDivider from '@/components/GoldDivider';
import SectionLabel from '@/components/SectionLabel';
import MediaModal from '@/components/MediaModal';
import { getGalleryPhotos } from '@/config/media';
import type { MediaItem } from '@/types/media';

interface GallerySectionProps {
  onModalOpen?: () => void;
  onModalClose?: () => void;
}

export default function GallerySection({ onModalOpen, onModalClose }: GallerySectionProps) {
  const photos = getGalleryPhotos();
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (i: number) => {
    setModalIndex(i);
    onModalOpen?.();
  };

  const closeModal = () => {
    setModalIndex(null);
    onModalClose?.();
  };

  return (
    <section
      style={{
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 60px)',
        background: 'var(--color-bg-secondary)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <SectionLabel text="Nous" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--color-text-primary)',
              marginTop: '16px',
              lineHeight: 1.1,
            }}
          >
            Chaque instant capturé.
          </motion.h2>
        </div>

        <GoldDivider className="mb-12" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))',
            gap: '20px',
          }}
        >
          {photos.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} onClick={() => openModal(i)} />
          ))}
        </div>

        <GoldDivider className="mt-12" />
      </div>

      {modalIndex !== null && (
        <MediaModal
          items={photos}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={() => setModalIndex(i => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() => setModalIndex(i => (i !== null && i < photos.length - 1 ? i + 1 : i))}
        />
      )}

    </section>
  );
}

function PhotoCard({ photo, index, onClick }: { photo: MediaItem; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
      onClick={onClick}
      style={{
        position: 'relative',
        background: '#080808',
        border: '1px solid rgba(201,168,76,0.15)',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'none',
        transition: 'border-color 0.3s',
        aspectRatio: '4/3',
      }}
      whileHover={{ borderColor: 'rgba(201,168,76,0.5)' } as never}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/media/${photo.filename}`}
        alt={photo.caption || `Photo ${index + 1}`}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />

      {/* Caption & date */}
      <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px' }}>
        {photo.caption && (
          <p
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'rgba(201,168,76,0.8)',
              textTransform: 'uppercase',
            }}
          >
            {photo.caption}
          </p>
        )}
        {photo.date && (
          <p
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: '0.75rem',
              color: 'rgba(245,240,232,0.5)',
              marginTop: '4px',
              fontStyle: 'italic',
            }}
          >
            {photo.date}
          </p>
        )}
      </div>
    </motion.div>
  );
}
