import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const hasLiveUrl = project.url && project.url !== '#';
  const highlights = project.highlights.slice(0, 3);

  return (
    <article
      className={cn(
        'group h-full flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950/50 p-8 transition-all duration-300',
        'motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-xl motion-safe:hover:shadow-neutral-500/10 motion-safe:hover:ring-1 motion-safe:hover:ring-white/10',
        'motion-reduce:hover:scale-100'
      )}
    >
      <div className="flex-1 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-neutral-100 transition-colors">
              {project.title}
            </h3>
            <p className="text-neutral-500 text-sm font-light mt-1">{project.tagline}</p>
          </div>
          {project.comingSoon && (
            <span className="text-xs font-medium uppercase tracking-wider text-amber-500/90">
              Soon
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-neutral-600 bg-neutral-900/60 text-neutral-300 font-light"
            >
              {tag}
            </Badge>
          ))}
        </div>
        {highlights.length > 0 && (
          <ul className="space-y-2 pt-2">
            {highlights.map((line) => (
              <li
                key={line}
                className="text-neutral-400 text-sm font-light leading-relaxed flex gap-2"
              >
                <span className="text-neutral-600 shrink-0" aria-hidden>
                  •
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-neutral-800/80">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-neutral-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          View Details
        </Link>
        {hasLiveUrl && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 text-neutral-300 px-4 py-2.5 text-sm font-light hover:border-neutral-500 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
          >
            Live site
            <ExternalLink className="w-4 h-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
