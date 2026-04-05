import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';

const MAILTO = 'mailto:marwanabdelwahab9@gmail.com';

export function ContactSection() {
  return (
    <Section className="border-t border-neutral-900 pb-28">
      <Reveal>
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-950 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Ready to talk about your next product?
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              Tell me about the problem, timeline, and stack—I&apos;ll respond with how I can help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 shrink-0">
            <a
              href={MAILTO}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Work With Me
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
            <div className="flex items-center gap-5 justify-center sm:justify-start">
              <a
                href="https://github.com/mrwan14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors p-2 -m-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/marwanabdelwahab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors p-2 -m-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
