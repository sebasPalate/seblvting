import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const element = document.querySelector(target.getAttribute('href')!);
      element?.scrollIntoView({ behavior: 'smooth' });
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);
};

export default useSmoothScroll;