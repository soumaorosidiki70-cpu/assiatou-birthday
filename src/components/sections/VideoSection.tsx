'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import GoldDivider from '@/components/GoldDivider';
import SectionLabel from '@/components/SectionLabel';
import MediaModal from '@/components/MediaModal';
import { getVideos } from '@/config/media';
import type { MediaItem } from '@/types/media';

interface VideoSectionProps {
  onVideoPause?: () => void;
  onVideoResume?: () => void;
}

export default function VideoSection({ onVideoPause, onVideoResume }: VideoSectionProps) {
  const videos = getVideos();
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (i: number) => {
    setModalIndex(i);
    onVideoPause?.();
  };

  const closeModal = () => {
    setModalIndex(null);
    onVideoResume?.();
  };

  return (
    <section
      style={{
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 60px)',
        background: 'var(--color-bg-primary)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <SectionLabel text="Nos Moments" />
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
            Des souvenirs qui ne s'effacent pas.
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
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} onClick={() => openModal(i)} />
          ))}
        </div>

        <GoldDivider className="mt-12" />
      </div>

      {modalIndex !== null && (
        <MediaModal
          items={videos}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={() => setModalIndex(i => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() => setModalIndex(i => (i !== null && i < videos.length - 1 ? i + 1 : i))}
          onVideoPlay={onVideoPause}
          onVideoClose={onVideoResume}
        />
      )}
    </section>
  );
}

function VideoCard({ video, index, onClick }: { video: MediaItem; index: number; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        background: 'var(--color-bg-card)',
        border: '1px solid rgba(201,168,76,0.15)',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'none',
        transition: 'border-color 0.3s',
        aspectRatio: '16/9',
      }}
      whileHover={{ borderColor: 'rgba(201,168,76,0.5)' } as never}
    >
      <video
        ref={videoRef}
        src={`/media/${video.filename}`}
        muted
        playsInline
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)',
        }}
      />

      {/* Play button */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.6)',
            border: '1.5px solid rgba(201,168,76,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#c9a84c">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>

      {/* Caption & date */}
      <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px' }}>
        <p
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'rgba(201,168,76,0.8)',
            textTransform: 'uppercase',
          }}
        >
          {video.caption || `Moment #${index + 1}`}
        </p>
        {video.date && (
          <p
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: '0.75rem',
              color: 'rgba(245,240,232,0.5)',
              marginTop: '4px',
              fontStyle: 'italic',
            }}
          >
            {video.date}
          </p>
        )}
      </div>
    </motion.div>
  );
}
