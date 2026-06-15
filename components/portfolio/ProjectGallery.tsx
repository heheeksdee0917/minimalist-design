'use client';

import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useInView } from '@/hooks/useInView';
import { type Project } from '@/lib/projects';

interface ProjectGalleryProps {
  project: Project;
}

function GalleryItem({ src, alt, delay }: { src: string | null; alt: string; delay: string }) {
  const ref = useInView<HTMLDivElement>({ delay });

  return (
    <div ref={ref} className="fade-in">
      <ImagePlaceholder aspectRatio="4/3" alt={alt} src={src} />
    </div>
  );
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  // If no gallery images defined, show 4 placeholders
  const items =
    project.gallery.length > 0
      ? project.gallery.map((src, i) => ({ src, alt: `${project.name} — Image ${i + 1}` }))
      : Array.from({ length: 4 }, (_, i) => ({ src: null, alt: `${project.name} — Image ${i + 1}` }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {items.map((item, index) => (
        <GalleryItem
          key={item.alt}
          src={item.src}
          alt={item.alt}
          delay={`${index * 0.08}s`}
        />
      ))}
    </div>
  );
}