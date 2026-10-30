import Image from "next/image";

export default function ActorAndImage({
  imageUrlLong,
  imageUrlShort,
  alt1 = "Missing image alt text",
  alt2 = "Missing image alt text",
  className = "",
  order = "bigFirst",
  flip: flip = false,
}: {
  imageUrlLong: string;
  imageUrlShort: string;
  alt1?: string;
  alt2?: string;
  className?: string;
  order?: "bigFirst" | "smallFirst";
  flip?: boolean;
}) {
  const isBigFirst = order === "bigFirst";
  const bigImage = (
    <div className="relative aspect-[var(--ratio-long-image)] md:col-span-4">
      <Image
        src={imageUrlLong}
        alt={alt1}
        fill
        className={`object-cover ${flip ? "transform scale-x-[-1]" : ""} ${
          flip
            ? isBigFirst
              ? "md:pl-1"
              : "md:pr-1"
            : isBigFirst
            ? "md:pr-1"
            : "md:pl-1"
        }`}
      />
    </div>
  );

  const smallImage = imageUrlShort ? (
    <div className="relative aspect-[var(--ratio-tall-image)] md:col-span-1">
      <Image
        src={imageUrlShort}
        alt={alt2}
        fill
        className={`object-cover ${isBigFirst ? "md:pl-1" : "md:pr-1"} `}
      />
    </div>
  ) : null;

  return (
    <div className={`w-full ${className} pb-2`}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[0.4rem] md:gap-0">
        {isBigFirst ? (
          <>
            {bigImage}
            {smallImage}
          </>
        ) : (
          <>
            {smallImage}
            {bigImage}
          </>
        )}
      </div>
    </div>
  );
}
