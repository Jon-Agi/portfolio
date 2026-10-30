"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function YouTubeVideo({ videoId }: { videoId: string }) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full h-full md:w-2/3 aspect-[16/9]">
        <div className="absolute top-0 left-0 w-full h-full">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onPlayerReady}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
