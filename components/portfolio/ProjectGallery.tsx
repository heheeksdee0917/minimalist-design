import ImagePlaceholder from '@/components/ImagePlaceholder';
import { type Project } from '@/lib/projects';

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <ImagePlaceholder aspectRatio="4/3" alt={`${project.name} - Image 1`} src={null} />
      <ImagePlaceholder aspectRatio="4/3" alt={`${project.name} - Image 2`} src={null} />
      <ImagePlaceholder aspectRatio="4/3" alt={`${project.name} - Image 3`} src={null} />
      <ImagePlaceholder aspectRatio="4/3" alt={`${project.name} - Image 4`} src={null} />
    </div>
  );
}
