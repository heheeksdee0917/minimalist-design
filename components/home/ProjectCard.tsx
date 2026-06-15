import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { type Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.id}`} className="group relative block">
      <ImagePlaceholder
        aspectRatio={project.aspectRatio}
        alt={project.name}
        src={project.cover}
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center">
        <span className="text-[16px] text-[#F5F5F5] font-light">{project.name}</span>
        <span className="text-[13px] text-[#888888] mt-1">{project.location}</span>
      </div>
    </Link>
  );
}