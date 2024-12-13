"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { MarkdownComponents } from "../markdown/MarkdownComponents";

interface QAContentProps {
  content: string;
}

export function QAContent({ content }: QAContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none pl-7">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={MarkdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}