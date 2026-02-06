import { ChevronLeft, ChevronRight } from 'lucide-react';
import { posthog } from '../lib/posthog';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
  presentationName?: string;
  theme?: 'dark' | 'light';
}

export function SlideNavigation({ currentSlide, totalSlides, onNavigate, presentationName, theme = 'dark' }: SlideNavigationProps) {
  const goToPrev = () => {
    const newSlide = Math.max(0, currentSlide - 1);
    posthog.capture('slide_navigation', {
      action: 'prev',
      from_slide: currentSlide,
      to_slide: newSlide,
      presentation: presentationName,
    });
    onNavigate(newSlide);
  };

  const goToNext = () => {
    const newSlide = Math.min(totalSlides - 1, currentSlide + 1);
    posthog.capture('slide_navigation', {
      action: 'next',
      from_slide: currentSlide,
      to_slide: newSlide,
      presentation: presentationName,
    });
    onNavigate(newSlide);
  };

  const goToSlide = (index: number) => {
    posthog.capture('slide_navigation', {
      action: 'dot_click',
      from_slide: currentSlide,
      to_slide: index,
      presentation: presentationName,
    });
    onNavigate(index);
  };

  const isLight = theme === 'light';

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-t backdrop-blur-sm ${
      isLight
        ? 'border-gray-200 bg-white/80'
        : 'border-white/5 bg-gray-950/80'
    }`}>
      <button
        onClick={goToPrev}
        disabled={currentSlide === 0}
        className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg disabled:opacity-30 transition-all text-sm ${
          isLight
            ? 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
              i === currentSlide
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-4 sm:w-6'
                : isLight
                  ? 'bg-gray-300 hover:bg-gray-400'
                  : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      <button
        onClick={goToNext}
        disabled={currentSlide === totalSlides - 1}
        className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg disabled:opacity-30 transition-all text-sm ${
          isLight
            ? 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
      </button>
    </div>
  );
}
