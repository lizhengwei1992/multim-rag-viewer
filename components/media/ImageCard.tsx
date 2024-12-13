"use client";

import { Card } from "@/components/ui/card";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ImageExtra } from "@/types/qa";

interface ImageCardProps {
  item: ImageExtra;
}

export function ImageCard({ item }: ImageCardProps) {
  return (
    <Card className="overflow-hidden group hover:ring-2 ring-primary/20 transition-all duration-200">
      <div className="aspect-video relative bg-black/5">
        <Zoom>
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Zoom>
      </div>
      <div className="p-4">
        <p className="text-sm text-center text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-200">
          {item.title}
        </p>
      </div>
    </Card>
  );
}