import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
}

export default function ProjectCard({ title, description, url }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 flex flex-col justify-between h-full hover:border-neutral-600 transition-colors group"
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h4 className="text-xl font-light text-white group-hover:text-neutral-200 transition-colors">
            {title}
          </h4>
          <ExternalLink className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-1 group-hover:text-neutral-400 transition-colors" />
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
}

