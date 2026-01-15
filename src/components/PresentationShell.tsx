import type { ReactNode } from 'react';

interface PresentationShellProps {
  children: ReactNode;
}

export function PresentationShell({ children }: PresentationShellProps) {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-orange-950/20" />
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
