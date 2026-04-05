import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE_HERO } from '@/data/site';
import { AboutCard } from '@/components/sections/AboutCard';
import { Section } from '@/components/layout/Section';

const MAILTO = 'mailto:marwanabdelwahab9@gmail.com';

export function HeroSection() {
  return (
    <Section className="pt-12 md:pt-20 pb-8 md:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6">
            <p className="text-neutral-500 text-sm font-light tracking-wide uppercase">
              Frontend engineer · Products & platforms
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
              {SITE_HERO.headline}
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
              {SITE_HERO.subheadline}
            </p>
            <p className="text-sm md:text-base text-neutral-500 font-light max-w-xl border-l border-neutral-700 pl-4">
              {SITE_HERO.credibility}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <a
              href={MAILTO}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Let&apos;s Build Something
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 text-neutral-300 border border-neutral-700 px-8 py-3.5 rounded-xl font-light text-sm hover:border-neutral-500 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
            >
              View Projects
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 lg:pt-2">
          <AboutCard />
        </div>
      </div>
    </Section>
  );
}
