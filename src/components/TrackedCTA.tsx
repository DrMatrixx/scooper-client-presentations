import type { ReactNode } from 'react';
import { posthog } from '../lib/posthog';

interface TrackedCTAProps {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventProperties?: Record<string, unknown>;
}

export function TrackedCTA({
  href,
  children,
  className = '',
  eventName = 'cta_clicked',
  eventProperties = {},
}: TrackedCTAProps) {
  const handleClick = () => {
    posthog.capture(eventName, {
      href,
      ...eventProperties,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
