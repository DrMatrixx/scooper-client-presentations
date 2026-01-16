import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { PresentationConfig } from '../types/presentation';
import { PresentationShell } from '../components/PresentationShell';
import { SlideNavigation } from '../components/SlideNavigation';

interface PresentationRouteProps {
  presentation: PresentationConfig;
}

export function PresentationRoute({ presentation }: PresentationRouteProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const slideParam = searchParams.get('slide');

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

  return (
    <PresentationShell>
      <div className="flex-1 flex items-center justify-center p-3 sm:p-6 pb-20 sm:pb-24 overflow-y-auto">
        {presentation.slides[currentSlide].render()}
      </div>
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={presentation.slides.length}
        onNavigate={setCurrentSlide}
      />
    </PresentationShell>
  );
}
