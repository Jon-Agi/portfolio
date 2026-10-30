import Project from "../project";

export default function EqualSizeRow({
  imageUrl1 = "/placeholder.svg?height=360&width=640",
  imageUrl2 = "",
  alt1 = "Missing image alt text",
  alt2 = "Missing image alt text",
  className = "",
  image1Text = "Hover me!",
  image2Text = "Hover me!",
  route1 = "/",
  route2 = "/",
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.4rem]">
        <div className="relative aspect-video overflow-hidden">
          <Project
            imageUrl={imageUrl1}
            alt={alt1}
            overlayText={image1Text}
            fill
            route={route1}
          />
        </div>
        <div className="relative aspect-video overflow-hidden">
          {imageUrl2 ? (
            <Project
              imageUrl={imageUrl2}
              alt={alt2}
              overlayText={image2Text}
              fill
              route={route2}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
