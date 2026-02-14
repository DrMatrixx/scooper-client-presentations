import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
  presentationName?: string;
  theme?: 'dark' | 'light';
  visitedSlides?: Set<number>;
}

export function SlideNavigation({ currentSlide, totalSlides, onNavigate, theme = 'dark', visitedSlides }: SlideNavigationProps) {
  const isLight = theme === 'light';

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-t backdrop-blur-sm ${
      isLight
        ? 'border-gray-200 bg-white/80'
        : 'border-white/5 bg-gray-950/80'
    }`}>
      <button
        onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
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

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                i === currentSlide
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-4 sm:w-6'
                  : visitedSlides?.has(i)
                    ? isLight
                      ? 'bg-amber-300/50 hover:bg-amber-400/60'
                      : 'bg-amber-500/30 hover:bg-amber-500/50'
                    : isLight
                      ? 'bg-gray-300 hover:bg-gray-400'
                      : 'bg-white/20 hover:bg-white/40'
              }`}
              style={i > 0 && i % 5 === 0 ? { marginLeft: '4px' } : undefined}
            />
          ))}
        </div>

        <span className={`text-xs font-mono tabular-nums ml-2 ${
          isLight ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      <button
        onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
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
