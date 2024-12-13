"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Image, Video } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { QAContent } from "./QAContent";
import { MediaGrid } from "../media/MediaGrid";
import { QAItem } from "@/types/qa";

interface QACardProps {
  item: QAItem;
}

export function QACard({ item }: QACardProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow duration-200">
      <div className="space-y-6">
        <div>
          <SectionHeader icon={MessageSquare} title="Query" />
          <p className="text-muted-foreground pl-7">{item.query}</p>
        </div>
        
        <Separator />
        
        <div>
          <SectionHeader icon={MessageSquare} title="Answer" />
          <QAContent content={item.answer} />
        </div>

        {item.search_extra_img?.length > 0 && (
          <>
            <Separator />
            <div>
              <SectionHeader icon={Image} title="Related Images" className="mb-4" />
              <MediaGrid items={item.search_extra_img} type="image" />
            </div>
          </>
        )}

        {item.search_extra_video?.length > 0 && (
          <>
            <Separator />
            <div>
              <SectionHeader icon={Video} title="Related Videos" className="mb-4" />
              <MediaGrid items={item.search_extra_video} type="video" />
            </div>
          </>
        )}
      </div>
    </Card>
  );
}