import { useEffect, useState } from "react";

type UseMediaQueryOptions = {
  ssr?: boolean;
};

export function useMediaQuery(
  query: string,
  { ssr = false }: UseMediaQueryOptions = {},
): boolean {
  const [matches, setMatches] = useState(ssr);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);

    setMatches(mql.matches);

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
