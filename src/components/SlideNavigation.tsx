import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
}

export function SlideNavigation({ currentSlide, totalSlides, onNavigate }: SlideNavigationProps) {
  const goToPrev = () => onNavigate(Math.max(0, currentSlide - 1));
  const goToNext = () => onNavigate(Math.min(totalSlides - 1, currentSlide + 1));

  return (
    <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-t border-white/5 bg-gray-950/80 backdrop-blur-sm">
      <button
        onClick={goToPrev}
        disabled={currentSlide === 0}
        className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-all text-sm"
      >
        <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
              i === currentSlide
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-4 sm:w-6'
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      <button
        onClick={goToNext}
        disabled={currentSlide === totalSlides - 1}
        className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-all text-sm"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
      </button>
    </div>
  );
}
