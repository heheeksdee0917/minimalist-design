import Image from 'next/image';

interface Props {
  aspectRatio: string;
  alt: string;
  src?: string | null;
  className?: string;
}

const ratioMap: Record<string, string> = {
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-video',
};

export default function ImagePlaceholder({ aspectRatio, alt, src, className = '' }: Props) {
  const ratioClass = ratioMap[aspectRatio] ?? 'aspect-[4/3]';

  if (src) {
    return (
      <div className={`relative overflow-hidden ${ratioClass} ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`bg-[#1A1A1A] ${ratioClass} ${className}`}
      role="img"
      aria-label={alt}
    />
  );
}
