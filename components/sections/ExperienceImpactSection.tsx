import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import { EXPERIENCE_STATS } from '@/data/site';

export function ExperienceImpactSection() {
  return (
    <Section className="border-t border-neutral-900">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
          Where this comes from
        </h2>
        <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mb-12">
          A bit of context before the case studies, so you know what kind of rooms I’ve been in, not just
          what’s on my CV.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <Reveal delayMs={60}>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 md:p-10">
            <p className="text-neutral-500 text-sm font-light uppercase tracking-wider mb-3">
              So far
            </p>
            <p className="text-3xl md:text-4xl font-light text-white mb-4">
              {EXPERIENCE_STATS.yearsLabel}
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              {EXPERIENCE_STATS.yearsDetail}
            </p>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 md:p-10">
            <p className="text-neutral-500 text-sm font-light uppercase tracking-wider mb-4">
              Shapes of work
            </p>
            <ul className="space-y-3 mb-8">
              {EXPERIENCE_STATS.productTypes.map((line) => (
                <li
                  key={line}
                  className="text-neutral-300 font-light flex items-start gap-3"
                >
                  <span className="text-neutral-600 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-neutral-500 text-sm font-light leading-relaxed border-t border-neutral-800 pt-6">
              {EXPERIENCE_STATS.clientsLine}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
