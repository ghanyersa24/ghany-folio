import { useEffect, useState } from 'react';

const SCROLL_OFFSET = 200;

/**
 * Scroll-spy hook: tracks which section is currently in the viewport.
 *
 * @param {string[]} sectionIds - element ids to observe, in document order.
 * @param {string} [defaultId] - section considered active before any scroll.
 * @returns {string} the id of the currently active section.
 */
export function useActiveSection(sectionIds, defaultId = sectionIds[0]) {
  const [activeSection, setActiveSection] = useState(defaultId);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
