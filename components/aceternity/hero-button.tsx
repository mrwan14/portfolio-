import Link from 'next/link';

import { cn } from '@/lib/utils';

const heroCtaClassName = cn(
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-medium',
  'border border-neutral-700 bg-neutral-950/90 text-neutral-200',
  'transition-[color,background-color,border-color,box-shadow] duration-300 ease-out',
  'hover:border-neutral-500 hover:bg-gradient-to-r hover:from-neutral-900 hover:to-neutral-950 hover:text-white',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
);

type HeroCtaProps = {
  href: string;
  children: React.ReactNode;
};

export function HeroCta({ href, children }: HeroCtaProps) {
  if (href.startsWith('#')) {
    return (
      <Link href={href} className={heroCtaClassName}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={heroCtaClassName}>
      {children}
    </a>
  );
}
