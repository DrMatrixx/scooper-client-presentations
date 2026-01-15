import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
}

export function GradientText({ children }: GradientTextProps) {
  return (
    <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}
