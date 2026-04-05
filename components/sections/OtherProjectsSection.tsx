'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ExternalLink } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/layout/Reveal';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

type OtherProjectsSectionProps = {
  projects: Project[];
};

function OtherProjectRow({ project }: { project: Project }) {
  const hasUrl = project.url && project.url !== '#';
  const primaryTag = project.tags[0];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5 border-b border-neutral-800/80 last:border-0 group">
      <div className="min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h4 className="text-base font-light text-white group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h4>
          {primaryTag && (
            <span className="text-[11px] uppercase tracking-wider text-neutral-500">
              {primaryTag}
            </span>
          )}
        </div>
        <p className="text-neutral-500 text-sm font-light mt-1 line-clamp-2">
          {project.tagline}
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm text-neutral-400 hover:text-white font-light transition-colors"
        >
          Details
        </Link>
        {hasUrl && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white font-light transition-colors"
          >
            Visit
            <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        )}
      </div>
    </div>
  );
}

export function OtherProjectsSection({ projects }: OtherProjectsSectionProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const apply = () => setOpen(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  if (projects.length === 0) return null;

  return (
    <Section className="border-t border-neutral-900">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
          More along the way
        </h2>
        <p className="text-neutral-400 font-light text-base max-w-2xl mb-8">
          Smaller pieces and experiments—same mindset, less room to tell the full story here.
        </p>
      </Reveal>
      <Reveal delayMs={80}>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger
            className={cn(
              'flex items-center justify-between w-full rounded-xl border border-neutral-800 bg-neutral-950/40 px-5 py-4 text-left',
              'hover:border-neutral-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500',
              open && 'rounded-b-none border-b-0'
            )}
          >
            <span className="text-neutral-300 font-light text-sm">
              {open ? 'Hide' : 'Show'} {projects.length} more projects
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-neutral-500 transition-transform duration-200',
                open && 'rotate-180'
              )}
              aria-hidden
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="rounded-b-xl border border-t-0 border-neutral-800 bg-neutral-950/30 px-5 md:px-8">
              {projects.map((p) => (
                <OtherProjectRow key={p.slug} project={p} />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Reveal>
    </Section>
  );
}
