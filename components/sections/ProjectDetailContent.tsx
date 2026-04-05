import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/data/projects';

type ProjectDetailContentProps = {
  project: Project;
};

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const hasLiveUrl = project.url && project.url !== '#';

  return (
    <article className="max-w-3xl">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white font-light mb-10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 rounded"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden />
        Back to projects
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-neutral-600 bg-neutral-900/60 text-neutral-300 font-light"
            >
              {tag}
            </Badge>
          ))}
          {project.comingSoon && (
            <span className="text-xs font-medium uppercase tracking-wider text-amber-500/90">
              Case study in progress
            </span>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-neutral-400 font-light leading-relaxed">
          {project.tagline}
        </p>
        {hasLiveUrl && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-sm text-white border border-neutral-600 rounded-lg px-4 py-2.5 hover:border-neutral-400 transition-colors font-light"
          >
            Open live site
            <ExternalLink className="w-4 h-4" aria-hidden />
          </a>
        )}
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-lg font-light text-white mb-3 tracking-tight">Problem</h2>
          <p className="text-neutral-400 font-light leading-relaxed">{project.problem}</p>
        </section>

        <section>
          <h2 className="text-lg font-light text-white mb-3 tracking-tight">What I built</h2>
          <p className="text-neutral-400 font-light leading-relaxed">{project.whatIBuilt}</p>
        </section>

        <section>
          <h2 className="text-lg font-light text-white mb-3 tracking-tight">Key features</h2>
          <ul className="space-y-2">
            {project.keyFeatures.map((f) => (
              <li
                key={f}
                className="text-neutral-400 font-light leading-relaxed flex gap-3"
              >
                <span className="text-neutral-600 shrink-0" aria-hidden>
                  •
                </span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-light text-white mb-3 tracking-tight">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-neutral-800 text-neutral-300 border-0 font-light"
              >
                {t}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-light text-white mb-3 tracking-tight">
            Challenges &amp; solutions
          </h2>
          <ul className="space-y-6">
            {project.challenges.map((c, i) => (
              <li key={i} className="border-l border-neutral-700 pl-4">
                <p className="text-neutral-300 font-light text-sm mb-1">Challenge</p>
                <p className="text-neutral-400 font-light leading-relaxed mb-3">
                  {c.challenge}
                </p>
                <p className="text-neutral-300 font-light text-sm mb-1">Solution</p>
                <p className="text-neutral-400 font-light leading-relaxed">{c.solution}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
