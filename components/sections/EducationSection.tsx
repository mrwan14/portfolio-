import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import { EDUCATION, LANGUAGES } from '@/data/site';

export function EducationSection() {
  return (
    <Section className="border-t border-neutral-900">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-12">
          Education &amp; languages
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Reveal delayMs={40}>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8">
            <p className="text-neutral-500 text-sm font-light uppercase tracking-wider mb-3">
              Education
            </p>
            <h3 className="text-xl font-light text-white mb-2">{EDUCATION.degree}</h3>
            <p className="text-neutral-400 font-light leading-relaxed">{EDUCATION.school}</p>
            <p className="text-neutral-500 text-sm font-light mt-2">{EDUCATION.dates}</p>
            <p className="text-neutral-500 text-sm font-light mt-4 border-t border-neutral-800 pt-4">
              {EDUCATION.project}
            </p>
          </div>
        </Reveal>
        <Reveal delayMs={100}>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8">
            <p className="text-neutral-500 text-sm font-light uppercase tracking-wider mb-5">
              Languages
            </p>
            <ul className="space-y-4">
              {LANGUAGES.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 border-b border-neutral-800/80 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-white font-light">{lang.name}</span>
                  <span className="text-neutral-500 text-sm font-light">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
