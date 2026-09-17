import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import { CORE_STRENGTHS, TECHNICAL_SKILLS } from '@/data/site';

export function WhatIDoBestSection() {
  return (
    <Section className="border-t border-neutral-900">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
          Strengths &amp; skills
        </h2>
        <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mb-10">
          Architecture, product judgment, and multilingual delivery, plus the stack I use to ship
          it.
        </p>
      </Reveal>

      <Reveal delayMs={40}>
        <div className="flex flex-wrap gap-2 mb-14">
          {CORE_STRENGTHS.map((strength) => (
            <span
              key={strength}
              className="text-sm font-light text-neutral-300 border border-neutral-800 bg-neutral-950/50 rounded-full px-3.5 py-1.5"
            >
              {strength}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECHNICAL_SKILLS.map((group, i) => (
          <Reveal key={group.category} delayMs={i * 70}>
            <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-950/50 p-7">
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 font-light mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-light text-neutral-300 bg-neutral-900/70 border border-neutral-800 rounded-lg px-2.5 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
