import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

type UseIntersectionObserverOptions = {
  threshold?: number | number[];
  rootMargin?: string;
  root?: RefObject<Element | null>;
  once?: boolean;
};

export function useIntersectionObserver(
  elementRef: RefObject<Element | null>,
  { threshold = 0, rootMargin = "0px", root, once = false }: UseIntersectionObserverOptions = {},
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const onceRef = useRef(once);

  useEffect(() => {
    onceRef.current = once;
  }, [once]);

  useEffect(() => {
    const element = elementRef.current;

    if (typeof window === "undefined" || !element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);

        if (isVisible && onceRef.current) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin, root: root?.current ?? null },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, rootMargin, root]);

  return isIntersecting;
}
