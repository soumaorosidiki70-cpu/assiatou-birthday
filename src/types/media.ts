export type MediaItem = {
  id: string;
  filename: string;
  type: 'photo' | 'video';
  date?: string;
  caption?: string;
  section?: 'timeline' | 'gallery' | 'video' | 'hero' | 'message-bg';
  timelineEntry?: number;
};

export type AudioConfig = {
  filename: string;
  autoplay: boolean;
  loop: boolean;
  initialVolume: number;
};
