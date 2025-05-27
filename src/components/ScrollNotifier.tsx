import React, { useState, useEffect, useCallback } from 'react';

interface ScrollNotifierProps {
  direction: 'left' | 'right' | 'up' | 'down';
}

// UI class maps for different directions
const UI_CLASSES = {
  position: {
    left: 'fixed left-4 top-1/2 transform -translate-y-1/2 z-50',
    right: 'fixed right-4 top-1/2 transform -translate-y-1/2 z-50',
    up: 'fixed top-20 left-1/2 transform -translate-x-1/2 z-50',
    down: 'fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50',
  },
  rotation: {
    left: 'rotate-180',
    right: 'rotate-0',
    up: '-rotate-90',
    down: 'rotate-90',
  }
};

const ScrollNotifier: React.FC<ScrollNotifierProps> = ({ direction }) => {
  const [canScroll, setCanScroll] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(false); // New state for mouse movement
  const isHorizontal = direction === 'left' || direction === 'right';

  // Handle click event to scroll to the adjacent element
  const handleClick = useCallback(() => {
    if (isHorizontal) {
      // Get all sections and the current hash
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const hash = window.location.hash.substring(1) || sections[0]?.id || '';
      
      // Find the current section index
      const currentIndex = sections.findIndex(section => section.id === hash);
      if (currentIndex === -1) return;
      
      // Calculate the target index based on direction
      const targetIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1) 
        : Math.min(sections.length - 1, currentIndex + 1);
      
      // Navigate to the target section
      const targetSection = sections[targetIndex];
      if (targetSection && targetSection.id) {
        window.location.hash = targetSection.id;
      }
    } else {
      // For vertical scrolling within sections
      // First find current section from hash
      const hash = window.location.hash.substring(1);
      const currentSection = document.getElementById(hash) as HTMLElement;
      if (!currentSection) return;
      
      // Find the snap items within this section (or all direct div children on mobile)
      const isMobile = window.innerWidth < 640;
      const snapItems = isMobile 
        ? currentSection.querySelectorAll(':scope > div')
        : currentSection.querySelectorAll(':scope > div.snap-center, :scope > div.snap-start');
      if (snapItems.length <= 1) return;
      
      // Find the most visible item to determine current position
      const containerRect = currentSection.getBoundingClientRect();
      let maxVisibleArea = 0;
      let currentItemIndex = 0;
      
      snapItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const visibleTop = Math.max(itemRect.top, containerRect.top);
        const visibleBottom = Math.min(itemRect.bottom, containerRect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          currentItemIndex = index;
        }
      });
      
      // Calculate target index based on direction
      const targetIndex = direction === 'up' 
        ? Math.max(0, currentItemIndex - 1) 
        : Math.min(snapItems.length - 1, currentItemIndex + 1);
      
      // Scroll to the target item
      const targetItem = snapItems[targetIndex] as HTMLElement;
      if (targetItem) {
        currentSection.scrollTo({
          top: targetItem.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, [direction, isHorizontal]);

  // Check if scrolling is possible in the given direction
  const checkScrollability = useCallback(() => {
    if (isHorizontal) {
      const sections = Array.from(document.querySelectorAll('section[id]'));
      if (sections.length <= 1) {
        setCanScroll(false);
        return;
      }
      
      // Get current section index from hash
      const hash = window.location.hash.substring(1) || sections[0]?.id || '';
      const currentIndex = sections.findIndex(section => section.id === hash);
      
      // Set scroll state based on position
      if (direction === 'left') {
        setCanScroll(currentIndex > 0);
      } else { // right
        setCanScroll(currentIndex < sections.length - 1);
      }
    } else {
      // Get current section from hash
      const hash = window.location.hash.substring(1);
      const currentSection = document.getElementById(hash) as HTMLElement;
      if (!currentSection) {
        setCanScroll(false);
        return;
      }
      
      // Check for vertical snap points (or all direct div children on mobile)
      const isMobile = window.innerWidth < 640;
      const snapItems = isMobile 
        ? currentSection.querySelectorAll(':scope > div')
        : currentSection.querySelectorAll(':scope > div.snap-center, :scope > div.snap-start');
      if (snapItems.length <= 1) {
        setCanScroll(false);
        return;
      }
      
      // Find current snap item
      const containerRect = currentSection.getBoundingClientRect();
      let maxVisibleArea = 0;
      let currentItemIndex = 0;
      
      snapItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const visibleTop = Math.max(itemRect.top, containerRect.top);
        const visibleBottom = Math.min(itemRect.bottom, containerRect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          currentItemIndex = index;
        }
      });
      
      // Set scrollability based on position
      setCanScroll(
        direction === 'up' 
          ? currentItemIndex > 0 
          : currentItemIndex < snapItems.length - 1
      );
    }
  }, [direction, isHorizontal]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let mouseMoveTimeout: NodeJS.Timeout;
    
    // Handle scrolling events
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        checkScrollability();
      }, 400);
    };

    // Handle mouse movement events
    const handleMouseMove = () => {
        setIsMouseMoving(true);
        clearTimeout(mouseMoveTimeout);

        mouseMoveTimeout = setTimeout(() => {
            setIsMouseMoving(false);
        }, 500); // Adjust the delay as needed
    };

    // Set up event listeners
    window.addEventListener('scroll', handleScroll, true);
    document.querySelectorAll('.snap-x, .snap-y').forEach(el => {
      el.addEventListener('scroll', handleScroll, { passive: true });
    });
    window.addEventListener('mousemove', handleMouseMove); // Add mousemove event
    
    // Setup observer for better detection
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setTimeout(checkScrollability, 100);
      }),
      { threshold: 0.2 }
    );
    
    document.querySelectorAll('section[id], div.snap-center, div.snap-start').forEach(el => {
      observer.observe(el);
    });
    
    // Additional event listeners
    window.addEventListener('hashchange', () => setTimeout(checkScrollability, 100));
    window.addEventListener('resize', checkScrollability);
    
    // Initial check
    setTimeout(checkScrollability, 200);
    
    // Periodic check for consistency
    const intervalCheck = setInterval(checkScrollability, 1000);
    
    // Cleanup
    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(mouseMoveTimeout);
      clearInterval(intervalCheck);
      window.removeEventListener('scroll', handleScroll, true);
      document.querySelectorAll('.snap-x, .snap-y').forEach(el => {
        el.removeEventListener('scroll', handleScroll);
      });
      window.removeEventListener('resize', checkScrollability);
      window.removeEventListener('hashchange', checkScrollability);
      window.removeEventListener('mousemove', handleMouseMove); // Remove mousemove event
      observer.disconnect();
    };
  }, [checkScrollability]);

  // Don't render if scrolling is not possible
  if (!canScroll) return null;

  return (
    <div 
      className={`z-50 ${UI_CLASSES.position[direction]} transition-opacity duration-300 ${isScrolling || isMouseMoving ? 'opacity-100' : 'opacity-0'} cursor-pointer`}
      onClick={handleClick}
      aria-label={`Scroll ${direction}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className={`w-10 h-10 transform ${UI_CLASSES.rotation[direction]} animate-pulse hover:scale-110 transition-transform`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.5)" />
          <path 
            d="M8 12H16M16 12L12 8M16 12L12 16" 
            stroke="#b9d5ff" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollNotifier;
