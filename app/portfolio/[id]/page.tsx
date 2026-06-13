import { notFound } from 'next/navigation';
import BackLink from '@/components/portfolio/BackLink';
import ProjectHero from '@/components/portfolio/ProjectHero';
import ProjectInfo from '@/components/portfolio/ProjectInfo';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import { projects, getProjectById } from '@/lib/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.type} project in ${project.location} by Minimalist Design.`,
  };
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-8 pb-[120px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <BackLink />
        <ProjectHero project={project} />
        <ProjectInfo project={project} />
        <ProjectGallery project={project} />
      </div>
    </main>
  );
}
