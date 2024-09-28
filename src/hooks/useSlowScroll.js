// src/hooks/useSlowScroll.js
import { useEffect } from 'react';

const smoothScrollTo = (target, duration) => {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1

    window.scrollTo(0, start + distance * progress); // Scroll to the position
    if (progress < 1) requestAnimationFrame(animation); // Continue the animation if not finished
  };

  requestAnimationFrame(animation);
};

const useSlowScroll = (sectionId, duration = 1000) => {
  useEffect(() => {
    const target = document.getElementById(sectionId);
    if (target) {
      smoothScrollTo(target, duration); // Automatically scroll to the target section
    }
  }, [sectionId, duration]);
};

export default useSlowScroll;
