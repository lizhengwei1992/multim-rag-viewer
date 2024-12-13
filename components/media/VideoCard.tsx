"use client";

import { Card } from "@/components/ui/card";
import { VideoExtra } from "@/types/qa";

interface VideoCardProps {
  item: VideoExtra;
}

export function VideoCard({ item }: VideoCardProps) {
  return (
    <Card className="overflow-hidden group hover:ring-2 ring-primary/20 transition-all duration-200">
      <div className="aspect-video relative bg-black/5">
        <video
          src={item.url}
          controls
          controlsList="nodownload"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-center text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-200">
          {item.title}
        </p>
      </div>
    </Card>
  );
}