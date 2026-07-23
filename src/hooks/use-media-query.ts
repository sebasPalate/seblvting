import { useEffect, useState } from "react";

type UseMediaQueryOptions = {
  ssr?: boolean;
};

function getInitialMatches(query: string, ssr: boolean): boolean {
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }
  return ssr;
}

export function useMediaQuery(query: string, { ssr = false }: UseMediaQueryOptions = {}): boolean {
  const [matches, setMatches] = useState(() => getInitialMatches(query, ssr));

  useEffect(() => {
    const mql = window.matchMedia(query);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mql.addEventListener("change", handler);

    return () => {
      mql.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}
