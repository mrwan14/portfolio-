'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';

import { cn } from '@/lib/utils';

type HeroSpotlightSectionProps = {
  children: React.ReactNode;
  className?: string;
};

function SpotlightFill({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const background = useMotionTemplate`
    radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.09), transparent 42%)
  `;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full"
      style={{ background }}
      aria-hidden
    />
  );
}

function StaticSpotlightFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full bg-[radial-gradient(ellipse_85%_55%_at_50%_-10%,rgba(255,255,255,0.07),transparent_65%)]"
      aria-hidden
    />
  );
}

export function HeroSpotlightSection({ children, className }: HeroSpotlightSectionProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      onMouseMove={reducedMotion ? undefined : handleMouseMove}
      className={cn('relative overflow-hidden', className)}
    >
      {reducedMotion ? (
        <StaticSpotlightFallback />
      ) : (
        <SpotlightFill mouseX={mouseX} mouseY={mouseY} />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
