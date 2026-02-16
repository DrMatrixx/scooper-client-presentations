import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
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

  const [direction, setDirection] = useState(0);
  const [visitedSlides, setVisitedSlides] = useState<Set<number>>(() => new Set([
    isNaN(slideParam ? parseInt(slideParam, 10) : 0) ? 0 : Math.max(0, Math.min(slideParam ? parseInt(slideParam, 10) : 0, presentation.slides.length - 1))
  ]));

  const totalSlides = presentation.slides.length;
  const slideRef = useRef(currentSlide);
  slideRef.current = currentSlide;

  const navigateTo = useCallback((target: number, action: string) => {
    const clamped = Math.max(0, Math.min(target, totalSlides - 1));
    if (clamped === slideRef.current) return;

    setDirection(clamped > slideRef.current ? 1 : -1);

    posthog.capture('slide_navigation', {
      action,
      from_slide: slideRef.current,
      to_slide: clamped,
      presentation: presentationName,
    });

    setCurrentSlide(clamped);
    setVisitedSlides(prev => {
      const next = new Set(prev);
      next.add(clamped);
      return next;
    });
  }, [totalSlides, presentationName]);

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
      total_slides: totalSlides,
    });
  }, [currentSlide, presentationName, presentation.title, presentation.slides, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        navigateTo(slideRef.current + 1, 'keyboard_next');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateTo(slideRef.current - 1, 'keyboard_prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateTo]);

  const theme = presentation.theme || 'dark';

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const progressPercent = totalSlides > 1 ? ((currentSlide) / (totalSlides - 1)) * 100 : 100;

  return (
    <PresentationShell theme={theme}>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-50 bg-gradient-to-r from-amber-500 to-orange-500"
        animate={{ width: `${progressPercent}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      <div className="flex-1 flex overflow-x-hidden overflow-y-auto p-3 sm:p-6 pb-20 sm:pb-24 relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, info) => {
              if (info.offset.x < -50) {
                navigateTo(currentSlide + 1, 'swipe_next');
              } else if (info.offset.x > 50) {
                navigateTo(currentSlide - 1, 'swipe_prev');
              }
            }}
            className="w-full flex items-center justify-center my-auto slide-stagger"
          >
            {presentation.slides[currentSlide].render()}
          </motion.div>
        </AnimatePresence>
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={(index) => navigateTo(index, index > currentSlide ? 'dot_next' : index < currentSlide ? 'dot_prev' : 'dot_click')}
        presentationName={presentationName}
        theme={theme}
        visitedSlides={visitedSlides}
      />
    </PresentationShell>
  );
}
