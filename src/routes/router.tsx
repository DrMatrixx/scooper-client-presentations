import { createBrowserRouter } from 'react-router-dom';
import { PresentationRoute } from './PresentationRoute';
import type { PresentationConfig } from '../types/presentation';

// Auto-discover all presentation files in /presentations folder
const presentationModules = import.meta.glob<{ default: PresentationConfig }>(
  '../presentations/*.tsx',
  { eager: true }
);

// Build routes from discovered files
const presentationRoutes = Object.entries(presentationModules).map(([path, module]) => {
  // Extract route name from path: ../presentations/hos.tsx -> hos
  const name = path.match(/\.\.\/presentations\/(.+)\.tsx$/)?.[1] ?? 'unknown';
  return {
    path: `/${name}`,
    element: <PresentationRoute presentation={module.default} />,
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
