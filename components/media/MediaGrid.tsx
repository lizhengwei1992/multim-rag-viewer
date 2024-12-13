"use client";

import { ImageCard } from "./ImageCard";
import { VideoCard } from "./VideoCard";
import { ImageExtra, VideoExtra } from "@/types/qa";

interface MediaGridProps {
  items: Array<ImageExtra | VideoExtra>;
  type: "image" | "video";
}

export function MediaGrid({ items, type }: MediaGridProps) {
  if (!items?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        type === "image" 
          ? <ImageCard key={index} item={item as ImageExtra} />
          : <VideoCard key={index} item={item as VideoExtra} />
      ))}
    </div>
  );
}