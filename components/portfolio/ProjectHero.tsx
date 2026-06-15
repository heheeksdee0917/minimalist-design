import ImagePlaceholder from '@/components/ImagePlaceholder';
import { type Project } from '@/lib/projects';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="mb-10">
      <ImagePlaceholder
        aspectRatio="16/9"
        alt={project.name}
        src={project.cover}
      />
    </div>
  );
}