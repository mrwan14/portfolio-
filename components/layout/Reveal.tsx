'use client';

import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0',
        className
      )}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
