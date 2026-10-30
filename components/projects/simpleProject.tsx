import YouTubeVideo from "../youtubeVideo";
import VimeoVideo from "../vimeoVideo";
interface SimpleProjectProps {
  videoUrl: string;
  description: string;
  responsibility: string;
}

export default function SimpleProject(props: SimpleProjectProps) {
  const isYouTube = props.videoUrl.includes("youtube");
  const getVideoUrl = (url: string) => {
    if (isYouTube) {
      return (
        <YouTubeVideo
          videoId={url.replace("https://www.youtube.com/watch?v=", "")}
        />
      );
    }
    return <VimeoVideo videoId={url} />;
  };

  return (
    <div className="flex flex-col w-full gap-10 md:gap-8">
      <div className="flex flex-col justify-center items-center w-full">
        {getVideoUrl(props.videoUrl)}
      </div>
      <div className="flex flex-col gap-2 md:gap-4 w-full text-center mt-4 pb-4">
        <p className="text-xl font-mono">{props.description}</p>
        <p className="text-lg font-mono">{props.responsibility}</p>
      </div>
    </div>
  );
}
