"use client";

import { Card } from "@/components/ui/card";
import { MediaGrid } from "./MediaGrid";
import { QAItem } from "@/types/qa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Image, Video } from "lucide-react";
import { SectionHeader } from "./qa/SectionHeader";
import { MarkdownComponents } from "./markdown/MarkdownComponents";

interface QADisplayProps {
  data: QAItem[];
}

export function QADisplay({ data }: QADisplayProps) {
  if (!data?.length) return null;

  return (
    <div className="space-y-8">
      {data.map((item, index) => (
        <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="space-y-6">
            <div>
              <SectionHeader icon={MessageSquare} title="Query" />
              <p className="text-muted-foreground pl-7">{item.query}</p>
            </div>
            
            <Separator />
            
            <div>
              <SectionHeader icon={MessageSquare} title="Answer" />
              <div className="prose dark:prose-invert max-w-none pl-7">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={MarkdownComponents}
                >
                  {item.answer}
                </ReactMarkdown>
              </div>
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
      ))}
    </div>
  );
}