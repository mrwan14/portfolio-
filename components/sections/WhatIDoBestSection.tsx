import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import { Layers, Plug, Gauge, Languages, Store } from 'lucide-react';

const ITEMS = [
  {
    title: 'Scalable frontend architecture',
    description:
      'Component systems, boundaries, and patterns that stay maintainable as products grow.',
    icon: Layers,
  },
  {
    title: 'API integrations',
    description:
      'Reliable data flows, error states, and UX that matches how backends actually behave.',
    icon: Plug,
  },
  {
    title: 'Performance optimization',
    description:
      'Perceived speed, bundle discipline, and UI that stays smooth under real usage.',
    icon: Gauge,
  },
  {
    title: 'RTL & multilingual apps',
    description:
      'Arabic-first layouts, direction-aware components, and polished bilingual experiences.',
    icon: Languages,
  },
  {
    title: 'SaaS & marketplaces',
    description:
      'Dashboards, listings, and conversion paths tuned for operators and end users.',
    icon: Store,
  },
];

export function WhatIDoBestSection() {
  return (
    <Section className="border-t border-neutral-900">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
          What I Do Best
        </h2>
        <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mb-14">
          Depth where products need it most—so teams can ship faster without sacrificing quality.
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
