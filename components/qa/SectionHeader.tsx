"use client";

import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export function SectionHeader({ icon: Icon, title, className = "mb-3" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Icon className="w-5 h-5 text-primary" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}