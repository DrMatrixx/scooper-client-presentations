import { createBrowserRouter } from 'react-router-dom';
import { PresentationRoute } from './PresentationRoute';
import { FullPageRoute } from './FullPageRoute';
import type { PresentationConfig } from '../types/presentation';

// Auto-discover all presentation files in /presentations folder (.tsx and .jsx)
const presentationModules = import.meta.glob<{ default: PresentationConfig | React.ComponentType }>(
  ['../presentations/*.tsx', '../presentations/*.jsx'],
  { eager: true }
);

// Build routes from discovered files
const presentationRoutes = Object.entries(presentationModules).map(([path, module]) => {
  // Extract route name from path: ../presentations/hos.tsx -> hos
  const name = path.match(/\.\.\/presentations\/(.+)\.(tsx|jsx)$/)?.[1] ?? 'unknown';
  const exported = module.default;

  // Check if it's a PresentationConfig (has slides) or a standalone component
  if (exported && typeof exported === 'object' && 'slides' in exported) {
    return {
      path: `/${name}`,
      element: <PresentationRoute presentation={exported as PresentationConfig} />,
    };
  }

  // Standalone component (e.g. boilerplate-style briefs)
  const Component = exported as React.ComponentType;
  return {
    path: `/${name}`,
    element: <FullPageRoute Component={Component} />,
  };
});

// Redirect component for external URL
function ExternalRedirect({ to }: { to: string }) {
  window.location.href = to;
  return null;
}

export const router = createBrowserRouter([
  // Redirect root to scooperai.com
  {
    path: '/',
    element: <ExternalRedirect to="https://scooperai.com" />,
  },
  ...presentationRoutes,
]);
