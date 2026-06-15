'use client';

import { useState } from 'react';
import { projects, type Project, type ProjectType } from '@/lib/projects';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';

const filters: Array<ProjectType | 'All'> = ['All', 'Residential', 'Commercial', 'Mixed-Use'];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.id}`} className="group relative block">
      <ImagePlaceholder
        aspectRatio={project.aspectRatio}
        alt={project.name}
        src={project.cover}
      />
      <div className="absolute inset-0 bg-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center">
        <span className="text-[16px] text-[#F5F5F5] font-light">{project.name}</span>
        <span className="text-[13px] text-[#888888] mt-1">{project.location}</span>
      </div>
    </Link>
  );
}

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | 'All'>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      <div className="flex items-center gap-6 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-[13px] tracking-[0.1em] uppercase transition-all duration-200 ${
              activeFilter === filter
                ? 'text-[#F5F5F5] font-semibold underline underline-offset-[4px]'
                : 'text-[#888888] font-normal hover:text-[#F5F5F5]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="transition-opacity duration-250"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </>
  );
}