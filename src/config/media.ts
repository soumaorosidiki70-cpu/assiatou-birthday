import type { MediaItem, AudioConfig } from '@/types/media';

export const audioConfig: AudioConfig = {
  filename: 'AUD-20260215-WA0086..mp3',
  autoplay: true,
  loop: true,
  initialVolume: 0.4,
};

export const mediaItems: MediaItem[] = [
  // HERO background
  { id: 'hero-bg', filename: 'Numérisé_20260529-1222-08.jpg', type: 'photo', section: 'hero' },
  // Message background
  { id: 'message-bg', filename: 'Numérisé_20260529-1222-01.jpg', type: 'photo', section: 'message-bg' },

  // PHOTOS GALERIE
  { id: 'photo-01', filename: 'Numérisé_20260529-1222-01.jpg', type: 'photo', date: '2023', section: 'gallery' },
  { id: 'photo-02', filename: 'Numérisé_20260529-1222-02.jpg', type: 'photo', date: '2023', section: 'gallery' },
  { id: 'photo-04', filename: 'Numérisé_20260529-1222-04.jpg', type: 'photo', date: '2023', section: 'gallery' },
  { id: 'photo-05', filename: 'Numérisé_20260529-1222-05.jpg', type: 'photo', date: '2023', section: 'gallery' },
  { id: 'photo-07', filename: 'Numérisé_20260529-1222-07.jpg', type: 'photo', date: '2023', section: 'gallery' },
  { id: 'photo-08', filename: 'Numérisé_20260529-1222-08.jpg', type: 'photo', date: '2023', section: 'gallery' },
  { id: 'photo-10', filename: 'Numérisé_20260529-1222-10.jpg', type: 'photo', date: '2023', section: 'gallery' },
  { id: 'photo-21', filename: 'Numérisé_20260529-1222-21.jpg', type: 'photo', date: '2025', section: 'gallery' },
  { id: 'photo-24', filename: 'Numérisé_20260529-1222-24.jpg', type: 'photo', date: '2025', section: 'gallery' },
  { id: 'photo-25', filename: 'Numérisé_20260529-1222-25.jpg', type: 'photo', date: '2025', section: 'gallery' },
  { id: 'photo-27', filename: 'Numérisé_20260529-1222-27.jpg', type: 'photo', date: '2025', section: 'gallery' },
  { id: 'photo-28', filename: 'Numérisé_20260529-1222-28.jpg', type: 'photo', date: '2025', section: 'gallery' },
  { id: 'photo-29', filename: 'Numérisé_20260529-1222-29.jpg', type: 'photo', date: '2025', section: 'gallery' },
  { id: 'photo-30', filename: 'Numérisé_20260529-1222-30.jpg', type: 'photo', date: '2026', section: 'gallery' },
  { id: 'photo-32', filename: 'Numérisé_20260529-1222-32.jpg', type: 'photo', date: '2026', section: 'gallery' },

  // VIDEOS
  { id: 'video-03', filename: 'VID-20260320-WA0071.mp4', type: 'video', date: '2026-03', section: 'video', caption: 'Moment #1' },
  { id: 'video-04', filename: 'VID-20260415-WA0051.mp4', type: 'video', date: '2026-04', section: 'video', caption: 'Moment #2' },
  { id: 'video-05', filename: 'VID-20260415-WA0053(1).mp4', type: 'video', date: '2026-04', section: 'video', caption: 'Moment #3' },
  { id: 'video-06', filename: 'VID-20260501-WA0031.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #4' },
  { id: 'video-07', filename: 'VID-20260503-WA0057.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #5' },
  { id: 'video-08', filename: 'VID-20260521-WA0004.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #6' },
  { id: 'video-09', filename: 'VID-20260521-WA0128.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #7' },
  { id: 'video-10', filename: 'VID-20260521-WA0130.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #8' },
  { id: 'video-11', filename: 'VID-20260521-WA0131.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #9' },
  { id: 'video-12', filename: 'VID-20260521-WA0134.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #10' },
  { id: 'video-13', filename: 'VID-20260521-WA0143.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #11' },
  { id: 'video-14', filename: 'VID-20260523-WA0012.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #12' },
  { id: 'video-15', filename: 'VID-20260523-WA0013.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #13' },
  { id: 'video-16', filename: 'VID-20260523-WA0014.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #14' },
  { id: 'video-17', filename: 'VID-20260523-WA0015.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #15' },
  { id: 'video-18', filename: 'VID-20260524-WA0010.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #16' },
  { id: 'video-19', filename: 'VID-20260524-WA0011.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #17' },
  { id: 'video-20', filename: 'VID-20260526-WA0130.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #18' },
  { id: 'video-21', filename: 'VID-20260526-WA0131.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #19' },
  { id: 'video-22', filename: 'VID-20260527-WA0010.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #20' },
  { id: 'video-23', filename: 'VID-20260527-WA0112.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #21' },
  { id: 'video-24', filename: 'VID-20260527-WA0113.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #22' },
  { id: 'video-25', filename: 'VID-20260527-WA0115(1).mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #23' },
  { id: 'video-26', filename: 'VID-20260527-WA0119.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #24' },
  { id: 'video-27', filename: 'VID-20260527-WA0119(1).mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #25' },
  { id: 'video-28', filename: 'VID-20260527-WA0120.mp4', type: 'video', date: '2026-05', section: 'video', caption: 'Moment #26' },
];

export const getGalleryPhotos = () =>
  mediaItems.filter(m => m.type === 'photo' && m.section === 'gallery');

export const getVideos = () =>
  mediaItems.filter(m => m.type === 'video' && m.section === 'video');

export const getHeroBg = () =>
  mediaItems.find(m => m.section === 'hero');

export const getMessageBg = () =>
  mediaItems.find(m => m.section === 'message-bg');
