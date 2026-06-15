'use client';

import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';
import { useInView } from '@/hooks/useInView';

function AnimatedCard({ project, index }: { project: ReturnType<typeof getFeaturedProjects>[0]; index: number }) {
  const ref = useInView<HTMLDivElement>({ delay: `${index * 0.1}s` });

  return (
    <div ref={ref} className="break-inside-avoid mb-2 fade-in">
      <ProjectCard project={project} />
    </div>
  );
}

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  const count = featuredProjects.length;

  const counterRef = useInView<HTMLParagraphElement>({ delay: '0s' });
  const ctaRef = useInView<HTMLDivElement>({ delay: '0s' });

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">

      {/* Counter */}
      <p
        ref={counterRef}
        className="text-[11px] text-[#555555] uppercase tracking-[0.12em] font-semibold mb-6 fade-in"
      >
        {count} {count === 1 ? 'Project' : 'Projects'}
      </p>

      {/* CSS columns masonry */}
      <div className="columns-1 sm:columns-2 gap-2">
        {featuredProjects.map((project, index) => (
          <AnimatedCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div ref={ctaRef} className="mt-12 flex justify-center fade-in">
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