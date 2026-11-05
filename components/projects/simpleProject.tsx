import YouTubeVideo from "../youtubeVideo";
import VimeoVideo from "../vimeoVideo";
interface SimpleProjectProps {
  videoUrl: string | string[];
  description: string;
  responsibility: string;
}

export default function SimpleProject(props: SimpleProjectProps) {
  const getVideoUrl = (url: string) => {
    const parsedUrl = new URL(url);
    if (
      parsedUrl.hostname === "youtu.be" ||
      parsedUrl.hostname.endsWith(".youtube.com") ||
      parsedUrl.hostname === "youtube.com"
    ) {
      const videoId =
        parsedUrl.hostname === "youtu.be"
          ? parsedUrl.pathname.slice(1)
          : parsedUrl.searchParams.get("v");
      if (!videoId) {
        throw new Error(`Missing YouTube video ID in URL: ${url}`);
      }
      return <YouTubeVideo videoId={videoId} />;
    }
    return <VimeoVideo videoId={url} />;
  };

  const videoUrls = Array.isArray(props.videoUrl)
    ? props.videoUrl
    : [props.videoUrl];

  return (
    <div className="flex flex-col w-full gap-10 md:gap-8">
      {videoUrls.map((videoUrl) => (
        <div
          key={videoUrl}
          className="flex flex-col justify-center items-center w-full"
        >
          {getVideoUrl(videoUrl)}
        </div>
      ))}
      <div className="flex flex-col gap-2 md:gap-4 w-full text-center mt-4 pb-4">
        <p className="text-xl font-mono">{props.description}</p>
        <p className="text-lg font-mono">{props.responsibility}</p>
      </div>
    </div>
  );
}
