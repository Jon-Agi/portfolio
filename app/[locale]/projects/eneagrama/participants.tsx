import Image from "next/image";

export default function Participants({
  imageUrls,
  alt,
  className = "",
}: {
  imageUrls: string[];
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-[0.6rem] ${className}`}
      style={{ gridTemplateColumns: `repeat(${imageUrls.length}, 1fr)` }}
    >
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="relative aspect-[var(--ratio-small-participant)]"
        >
          <Image src={url} alt={alt} fill />
        </div>
      ))}
    </div>
  );
}
