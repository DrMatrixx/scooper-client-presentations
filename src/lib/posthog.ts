import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phc_sEppUKaLW4f4iWrDqR94nXdiSM2ZKBmo9R2VnyWAtno', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
    });

    // Global click tracking for CTAs and external links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor) {
        const href = anchor.getAttribute('href') || '';
        const presentation = window.location.pathname.replace('/', '') || 'home';
        const slideParam = new URLSearchParams(window.location.search).get('slide');
        const currentSlide = slideParam ? parseInt(slideParam, 10) : 0;

        // Track "Book a Call" / cal.com clicks
        if (href.includes('cal.com')) {
          posthog.capture('book_call_clicked', {
            href,
            presentation,
            slide_index: currentSlide,
            button_text: anchor.textContent?.trim(),
          });
        }

        // Track Scooper AI website clicks
        if (href.includes('scooperai.com')) {
          posthog.capture('scooper_website_clicked', {
            href,
            presentation,
            slide_index: currentSlide,
          });
        }

        // Track any external link
        if (href.startsWith('http') && !href.includes(window.location.hostname)) {
          posthog.capture('external_link_clicked', {
            href,
            presentation,
            slide_index: currentSlide,
            link_text: anchor.textContent?.trim(),
          });
        }
      }
    });
  }
};

export { posthog };
