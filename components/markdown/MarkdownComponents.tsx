"use client";

import { ReactNode } from 'react';

interface MarkdownComponentProps {
  children: ReactNode;
}

interface MediaProps extends MarkdownComponentProps {
  src?: string;
  alt?: string;
}

export const MarkdownComponents = {
  p: ({ children }: MarkdownComponentProps) => (
    <div className="my-4">{children}</div>
  ),
  
  video: ({ src, ...props }: MediaProps) => (
    <video
      src={src}
      controls
      controlsList="nodownload"
      className="w-full max-w-2xl mx-auto rounded-lg"
      {...props}
    />
  ),
  
  img: ({ src, alt, ...props }: MediaProps) => (
    <img
      src={src}
      alt={alt}
      className="w-full max-w-2xl mx-auto rounded-lg"
      {...props}
    />
  ),
  
  sup: ({ children }: MarkdownComponentProps) => (
    <sup className="text-xs text-primary">{children}</sup>
  )
};