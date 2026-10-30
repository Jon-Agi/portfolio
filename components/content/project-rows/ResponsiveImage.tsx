import { cn } from "@/lib/utils";
import Project from "../project";

interface ResponsiveImageProps {
  imageUrl: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageText?: string;
  route?: string;
}

export function ResponsiveImage({
  imageUrl,
  alt,
  width = 1920,
  height = 720,
  className,
  imageText,
  route,
}: ResponsiveImageProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Project
        imageUrl={imageUrl}
        alt={alt}
        width={width}
        height={height}
        sizes="100vw"
        className="w-full h-auto object-cover"
        overlayText={imageText}
        route={route}
      />
    </div>
  );
}
