import { HeroSection } from '@/components/sections/HeroSection';
import { WhatIDoBestSection } from '@/components/sections/WhatIDoBestSection';
import { ExperienceImpactSection } from '@/components/sections/ExperienceImpactSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { OtherProjectsSection } from '@/components/sections/OtherProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import { featuredProjects, otherProjects } from '@/data/projects';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <WhatIDoBestSection />
      <ExperienceImpactSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <OtherProjectsSection projects={otherProjects} />
      <ContactSection />
      <Footer />
    </main>
  );
}
