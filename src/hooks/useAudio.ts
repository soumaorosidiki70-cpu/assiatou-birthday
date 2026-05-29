'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { audioConfig } from '@/config/media';

export function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(`/media/${audioConfig.filename}`);
    audio.loop = audioConfig.loop;
    audio.volume = audioConfig.initialVolume;
    audioRef.current = audio;

    audio.addEventListener('canplaythrough', () => setIsReady(true));

    const startOnInteraction = () => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
      document.removeEventListener('click', startOnInteraction);
      document.removeEventListener('touchstart', startOnInteraction);
    };

    document.addEventListener('click', startOnInteraction, { once: true });
    document.addEventListener('touchstart', startOnInteraction, { once: true });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isPlaying]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const resume = useCallback(() => {
    audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  return { isPlaying, isReady, toggle, pause, resume };
}
