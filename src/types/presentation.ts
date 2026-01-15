import type { ReactNode } from 'react';

export interface Slide {
  id: string;
  render: () => ReactNode;
}

export interface PresentationConfig {
  title: string;
  description?: string;
  slides: Slide[];
}
