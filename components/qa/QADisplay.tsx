"use client";

import { QAItem } from "@/types/qa";
import { QACard } from "./QACard";

interface QADisplayProps {
  data: QAItem[];
}

export function QADisplay({ data }: QADisplayProps) {
  if (!data?.length) return null;

  return (
    <div className="space-y-8">
      {data.map((item, index) => (
        <QACard key={index} item={item} />
      ))}
    </div>
  );
}