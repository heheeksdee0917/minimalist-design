import { type Project } from '@/lib/projects';

interface ProjectInfoProps {
  project: Project;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="mb-12">
      <h1 className="text-[32px] sm:text-[40px] font-light text-[#F5F5F5] tracking-[0.06em] mb-3">
        {project.name}
      </h1>
      <p className="text-[14px] text-[#888888] tracking-[0.06em] mb-2">
        {project.location} · {project.year}
      </p>
      <p className="text-[11px] text-[#888888] uppercase tracking-[0.12em] font-semibold">
        {project.type}
      </p>
    </div>
  );
}
