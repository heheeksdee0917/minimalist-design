'use client';

import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useInView } from '@/hooks/useInView';
import { type Project } from '@/lib/projects';

interface ProjectGalleryProps {
  project: Project;
}

function GalleryItem({ alt, delay }: { alt: string; delay: string }) {
  const ref = useInView<HTMLDivElement>({ delay });

  return (
    <div ref={ref} className="fade-in">
      <ImagePlaceholder aspectRatio="4/3" alt={alt} src={null} />
    </div>
  );
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <GalleryItem alt={`${project.name} - Image 1`} delay="0s" />
      <GalleryItem alt={`${project.name} - Image 2`} delay="0.08s" />
      <GalleryItem alt={`${project.name} - Image 3`} delay="0.16s" />
      <GalleryItem alt={`${project.name} - Image 4`} delay="0.24s" />
    </div>
  );
}