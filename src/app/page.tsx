'use client';

import dynamic from 'next/dynamic';
import { useAudio } from '@/hooks/useAudio';
import LoadingScreen from '@/components/LoadingScreen';
import FilmGrain from '@/components/FilmGrain';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import AudioPlayer from '@/components/AudioPlayer';

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), { ssr: false });
const TimelineSection = dynamic(() => import('@/components/sections/TimelineSection'), { ssr: false });
const PoemSection = dynamic(() => import('@/components/sections/PoemSection'), { ssr: false });
const IntroGallerySection = dynamic(() => import('@/components/sections/IntroGallerySection'), { ssr: false });
const GallerySection = dynamic(() => import('@/components/sections/GallerySection'), { ssr: false });
const VideoSection = dynamic(() => import('@/components/sections/VideoSection'), { ssr: false });
const MessageSection = dynamic(() => import('@/components/sections/MessageSection'), { ssr: false });
const OutroSection = dynamic(() => import('@/components/sections/OutroSection'), { ssr: false });

export default function Home() {
  const { isPlaying, toggle, pause, resume } = useAudio();

  return (
    <>
      <LoadingScreen />
      <FilmGrain />
      <ScrollProgress />
      <CustomCursor />
      <AudioPlayer isPlaying={isPlaying} onToggle={toggle} />

      <main>
        <HeroSection />
        <IntroGallerySection />
        <TimelineSection />
        <PoemSection />
        <GallerySection onModalOpen={pause} onModalClose={resume} />
        <VideoSection onVideoPause={pause} onVideoResume={resume} />
        <MessageSection />
        <OutroSection />
      </main>
    </>
  );
}
