"use client";

import { Card } from "@/components/ui/card";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface MediaGridProps {
  items: Array<{ url: string; title: string }>;
  type: "image" | "video";
}

export function MediaGrid({ items, type }: MediaGridProps) {
  if (!items?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <Card key={index} className="overflow-hidden group hover:ring-2 ring-primary/20 transition-all duration-200">
          <div className="aspect-video relative bg-black/5">
            {type === "image" ? (
              <Zoom>
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </Zoom>
            ) : (
              <video
                src={item.url}
                controls
                controlsList="nodownload"
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div className="p-4">
            <p className="text-sm text-center text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-200">
              {item.title}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}