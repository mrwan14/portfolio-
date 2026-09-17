import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import { EXPERIENCE_INTRO, EXPERIENCE_ROLES } from '@/data/site';

export function ExperienceImpactSection() {
  return (
    <Section className="border-t border-neutral-900">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
          Experience
        </h2>
        <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mb-12">
          {EXPERIENCE_INTRO.yearsLabel} of production work — {EXPERIENCE_INTRO.yearsDetail}
        </p>
      </Reveal>

      <div className="relative space-y-8">
        <div
          className="absolute left-[7px] top-3 bottom-3 w-px bg-neutral-800 hidden sm:block"
          aria-hidden
        />
        {EXPERIENCE_ROLES.map((role, i) => (
          <Reveal key={`${role.company}-${role.dates}`} delayMs={i * 80}>
            <article className="relative sm:pl-10">
              <span
                className="absolute left-0 top-3 hidden sm:block w-4 h-4 rounded-full border border-neutral-600 bg-neutral-950"
                aria-hidden
              >
                <span className="absolute inset-1 rounded-full bg-neutral-400" />
              </span>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-white">
                      {role.title}
                    </h3>
                    <p className="text-neutral-300 font-light mt-1">{role.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {role.current && (
                      <span className="text-[11px] uppercase tracking-wider text-emerald-400/90 border border-emerald-500/30 rounded-full px-2.5 py-0.5">
                        Current
                      </span>
                    )}
                    <p className="text-neutral-500 text-sm font-light">{role.dates}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-neutral-400 text-sm font-light leading-relaxed flex gap-2"
                    >
                      <span className="text-neutral-600 shrink-0" aria-hidden>
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
