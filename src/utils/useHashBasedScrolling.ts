import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that syncs horizontal scroll position with URL hash
 * Updates the URL hash when scrolling between sections
 * 
 * @returns {object} Object containing the ref and current hash
 */
export function useHashBasedScrolling() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  // Update hash based on scroll position
  const updateHashBasedOnScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const sections = Array.from(container.querySelectorAll('section[id]'));
    
    // Find which section is most visible
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    
    let closestSection = sections[0];
    let minDistance = Infinity;
    
    sections.forEach(section => {
      const sectionRect = section.getBoundingClientRect();
      const sectionCenter = sectionRect.left + sectionRect.width / 2;
      const distance = Math.abs(containerCenter - sectionCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });
    
    // Update hash if needed
    if (closestSection && closestSection.id && window.location.hash !== `#${closestSection.id}`) {
      // Use history.replaceState to avoid scrolling
      window.history.replaceState(null, '', `#${closestSection.id}`);
      // Update the current hash state
      setCurrentHash(`#${closestSection.id}`);
    }
  };

  // Handle scroll events
  const handleScroll = () => {
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;
    }
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Set a new timeout
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      updateHashBasedOnScrollPosition();
    }, 150); // Delay after scrolling stops
  };

  // Set up scroll event listeners
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    // Initial hash update based on position
    setTimeout(updateHashBasedOnScrollPosition, 100);
    
    // Set up hash change listener for direct hash changes (clicking links)
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return { scrollContainerRef, currentHash };
}