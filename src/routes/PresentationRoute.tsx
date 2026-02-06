import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import type { PresentationConfig } from '../types/presentation';
import { PresentationShell } from '../components/PresentationShell';
import { SlideNavigation } from '../components/SlideNavigation';
import { posthog } from '../lib/posthog';

interface PresentationRouteProps {
  presentation: PresentationConfig;
}

export function PresentationRoute({ presentation }: PresentationRouteProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const slideParam = searchParams.get('slide');
  const presentationName = location.pathname.replace('/', '') || 'home';

  const [currentSlide, setCurrentSlide] = useState(() => {
    const parsed = slideParam ? parseInt(slideParam, 10) : 0;
    return isNaN(parsed) ? 0 : Math.max(0, Math.min(parsed, presentation.slides.length - 1));
  });

  // Update URL when slide changes
  useEffect(() => {
    if (currentSlide > 0) {
      setSearchParams({ slide: currentSlide.toString() });
    } else {
      setSearchParams({});
    }
  }, [currentSlide, setSearchParams]);

  // Set document title
  useEffect(() => {
    document.title = presentation.title;
  }, [presentation.title]);

  // Track slide views
  useEffect(() => {
    const slideId = presentation.slides[currentSlide]?.id || `slide-${currentSlide}`;
    posthog.capture('slide_viewed', {
      presentation: presentationName,
      presentation_title: presentation.title,
      slide_index: currentSlide,
      slide_id: slideId,
      total_slides: presentation.slides.length,
    });
  }, [currentSlide, presentationName, presentation.title, presentation.slides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(presentation.slides.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [presentation.slides.length]);

  const theme = presentation.theme || 'dark';

  return (
    <PresentationShell theme={theme}>
      <div className="flex-1 flex items-center justify-center p-3 sm:p-6 pb-20 sm:pb-24 overflow-y-auto">
        {presentation.slides[currentSlide].render()}
      </div>
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={presentation.slides.length}
        onNavigate={setCurrentSlide}
        presentationName={presentationName}
        theme={theme}
      />
    </PresentationShell>
  );
}
