interface ImagePlaceholderProps {
  aspectRatio: string;
  alt: string;
  src?: string | null;
  className?: string;
}

export default function ImagePlaceholder({
  aspectRatio,
  alt,
  src,
  className = "",
}: ImagePlaceholderProps) {
  const aspectRatioClass = {
    "4/3": "aspect-[4/3]",
    "3/4": "aspect-[3/4]",
    "16/9": "aspect-video",
  }[aspectRatio] || "aspect-[4/3]";

  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`image-placeholder ${aspectRatioClass} ${className}`}
      role="img"
      aria-label={alt}
    />
  );
}
