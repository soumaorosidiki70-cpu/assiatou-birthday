import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import { Cormorant_Garamond, Cinzel, Lora, Playfair_Display } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Joyeux Anniversaire Assiatou',
  description: 'Un site pour toi, pour toujours. De Lanzeni avec tout son amour.',
  openGraph: {
    title: 'Joyeux Anniversaire Assiatou Sow',
    description: 'De Conakry avec amour.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${cinzel.variable} ${lora.variable} ${playfair.variable}`}
    >
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
