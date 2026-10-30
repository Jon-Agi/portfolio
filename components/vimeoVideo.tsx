"use client";
import React from "react";
export default function VimeoVideo({ videoId }: { videoId: string }) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full h-full md:w-2/3 aspect-[16/9]">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            title="vimeo-player"
            src={videoId}
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}