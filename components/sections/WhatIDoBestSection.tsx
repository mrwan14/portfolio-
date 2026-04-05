import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import { Layers, Plug, Gauge, Languages, Store } from 'lucide-react';

const ITEMS = [
  {
    title: 'Structure that survives the next feature',
    description:
      'I set up components and boundaries so the codebase doesn’t fight you when the roadmap shifts.',
    icon: Layers,
  },
  {
    title: 'When the API misbehaves',
    description:
      'Empty states, retries, and copy that match reality—so users aren’t left guessing.',
    icon: Plug,
  },
  {
    title: 'Speed you can feel',
    description:
      'I care about perceived performance: what loads first, what waits, and what never janks.',
    icon: Gauge,
  },
  {
    title: 'Arabic and English, same polish',
    description:
      'RTL isn’t an afterthought here—layout, type, and microcopy get the same attention both ways.',
    icon: Languages,
  },
  {
    title: 'The unglamorous product surfaces',
    description:
      'Dashboards, listings, admin tools—the places where operators and customers spend real time.',
    icon: Store,
  },
];

export function WhatIDoBestSection() {
  return (
    <Section className="border-t border-neutral-900">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
          How I usually show up
        </h2>
        <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mb-14">
          Not a checklist of buzzwords—just the places I tend to go deep when we’re building something
          together.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delayMs={i * 80}>
              <div className="group h-full rounded-2xl border border-neutral-800 bg-neutral-950/50 p-8 transition-all duration-300 motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-xl motion-safe:hover:shadow-neutral-500/5 motion-safe:hover:ring-1 motion-safe:hover:ring-white/10 motion-reduce:hover:scale-100">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 text-neutral-400 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="text-lg font-light text-white mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
