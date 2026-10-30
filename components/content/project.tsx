"use client";
import { Link, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";

interface ImageProps {
  imageUrl: string;
  alt: string;
  fill?: boolean;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  style?: React.CSSProperties;
  overlayText?: string;
  route?: string;
}

export default function Project(imageProps: ImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleImageClick = () => {
    if (imageProps.route) {
      router.push({ pathname: `/projects/${imageProps.route}` });
    }
  };
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <Link
      href={`/projects/${imageProps.route}`}
      prefetch={true}
      className="cursor-pointer"
      onClick={handleImageClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image wrapper with its own opacity transition */}
      <div
        className={`transition-opacity duration-300 ${
          isHovered ? "opacity-30" : "opacity-100"
        }`}
      >
        <Image
          src={imageProps.imageUrl}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          sizes={imageProps.sizes}
          style={imageProps.style}
          fill={imageProps.fill}
          className={imageProps.className}
        />
      </div>

      {/* Overlay text with independent opacity */}
      {isHovered && (
        <div
          className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold uppercase"
          style={{
            backgroundColor: "transparent",
            opacity: 1,
          }}
        >
          {imageProps.overlayText}
        </div>
      )}
    </Link>
  );
}
