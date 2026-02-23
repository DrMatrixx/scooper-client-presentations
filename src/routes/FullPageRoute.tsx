import type { ComponentType } from 'react';

interface FullPageRouteProps {
  Component: ComponentType;
}

export function FullPageRoute({ Component }: FullPageRouteProps) {
  return <Component />;
}
