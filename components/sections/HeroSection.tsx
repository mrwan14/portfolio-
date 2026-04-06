import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { HeroCta } from '@/components/aceternity/hero-button';
import { HeroSpotlightSection } from '@/components/aceternity/spotlight';
import { AboutCard } from '@/components/sections/AboutCard';
import { SITE_HERO } from '@/data/site';

const MAILTO = 'mailto:marwanabdelwahab9@gmail.com';

export function HeroSection() {
  return (
    <HeroSpotlightSection className="pt-12 md:pt-20 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.12]">
                {SITE_HERO.headline}
              </h1>
              <p className="max-w-xl text-base md:text-lg text-neutral-400 font-light leading-relaxed">
                {SITE_HERO.subheadline}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <HeroCta href="#projects">
                View projects
                <ArrowRight className="w-4 h-4 shrink-0 opacity-80" aria-hidden />
              </HeroCta>
              <HeroCta href={MAILTO}>
                Let&apos;s talk
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-80" aria-hidden />
              </HeroCta>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-1">
            <AboutCard />
          </div>
        </div>
      </div>
    </HeroSpotlightSection>
  );
}
