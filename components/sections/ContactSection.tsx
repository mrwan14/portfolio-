import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import { SITE_CONTACT } from '@/data/site';

const MAILTO = `mailto:${SITE_CONTACT.email}`;

export function ContactSection() {
  return (
    <Section className="border-t border-neutral-900 pb-28">
      <Reveal>
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-950 p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Let&apos;s build something great
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              Open to new opportunities. Send a note about what you&apos;re building, where
              you&apos;re stuck, and what good looks like.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white font-light transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-500" aria-hidden />
                {SITE_CONTACT.email}
              </a>
              <a
                href={SITE_CONTACT.phoneHref}
                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white font-light transition-colors"
              >
                <Phone className="w-4 h-4 text-neutral-500" aria-hidden />
                {SITE_CONTACT.phone}
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 shrink-0">
            <a
              href={MAILTO}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Send a message
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
            <div className="flex items-center gap-5 justify-center sm:justify-start">
              <a
                href={SITE_CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors p-2 -m-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={SITE_CONTACT.linkedin}
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
