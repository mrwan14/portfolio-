import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import { FeaturedProjectCard } from '@/components/sections/FeaturedProjectCard';
import type { Project } from '@/data/projects';

type FeaturedProjectsSectionProps = {
  projects: Project[];
};

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  return (
    <Section id="projects" className="border-t border-neutral-900">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
          Things I’m proud of
        </h2>
        <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mb-14">
          A few builds where the details mattered—performance, clarity, and how people actually moved
          through the product.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delayMs={i * 90}>
            <FeaturedProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
