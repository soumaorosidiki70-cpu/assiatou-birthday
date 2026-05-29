'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Notre Histoire' },
  { href: '/about', label: 'Elle' },
  { href: '/surprise', label: '😈' },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'clamp(24px, 4vw, 48px)',
        padding: '20px 24px',
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 80%, transparent 100%)',
        pointerEvents: 'none',
      }}
    >
      {links.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: active ? '#c9a84c' : 'rgba(201,168,76,0.75)',
              transition: 'color 0.3s',
              pointerEvents: 'auto',
            }}
            onMouseEnter={e => {
              if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c';
            }}
            onMouseLeave={e => {
              if (!active) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(201,168,76,0.75)';
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
