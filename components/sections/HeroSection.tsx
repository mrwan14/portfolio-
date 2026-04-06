import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE_HERO } from '@/data/site';
import { AboutCard } from '@/components/sections/AboutCard';
import { Section } from '@/components/layout/Section';

const MAILTO = 'mailto:marwanabdelwahab9@gmail.com';

export function HeroSection() {
  return (
    <Section className="pt-12 md:pt-20 pb-8 md:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.12]">
              {SITE_HERO.headline}
            </h1>
            <div className="space-y-4 max-w-xl">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                {SITE_HERO.subheadline}
              </p>
              {SITE_HERO.personality ? (
                <p className="text-base text-neutral-500 font-light leading-relaxed">
                  {SITE_HERO.personality}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
            <a
              href={MAILTO}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Say hello
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 text-neutral-300 border border-neutral-700 px-8 py-3.5 rounded-xl font-light text-sm hover:border-neutral-500 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
            >
              See what I&apos;ve built
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 lg:pt-1">
          <AboutCard />
        </div>
      </div>
    </Section>
  );
}
