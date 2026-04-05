import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { ProjectDetailContent } from '@/components/sections/ProjectDetailContent';
import Footer from '@/components/sections/Footer';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Project' };
  }
  return {
    title: `${project.title} | Marwan Abdelwahab`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <ProjectDetailContent project={project} />
      </div>
      <Footer />
    </main>
  );
}
