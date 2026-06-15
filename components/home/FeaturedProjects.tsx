import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  const count = featuredProjects.length;

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">

      {/* Counter */}
      <p className="text-[11px] text-[#555555] uppercase tracking-[0.12em] font-semibold mb-6">
        {count} {count === 1 ? 'Project' : 'Projects'}
      </p>

      {/* Grid — adapts to any count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/portfolio"
          className="text-[14px] text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200"
        >
          View all work →
        </Link>
      </div>
    </section>
  );
}