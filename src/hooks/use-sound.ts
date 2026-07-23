import { useCallback, useRef } from "react";

export function useSound(url: string) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const loadingRef = useRef(false);

  const play = useCallback(async () => {
    if (!bufferRef.current && !loadingRef.current) {
      loadingRef.current = true;

      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      if (!AudioContextClass) {
        console.warn("Web Audio API is not supported in this browser.");
        loadingRef.current = false;
        return;
      }

      try {
        const audioCtx = new AudioContextClass();
        audioCtxRef.current = audioCtx;

        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const decoded = await audioCtx.decodeAudioData(arrayBuffer);

        bufferRef.current = decoded;
      } catch (err) {
        console.error(`Failed to load sound from ${url}:`, err);
        loadingRef.current = false;
        return;
      }

      loadingRef.current = false;
    }

    // --- Reproducir ---
    const ctx = audioCtxRef.current;
    const buffer = bufferRef.current;
    if (!ctx || !buffer) return;

    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  }, [url]);

  return play;
}
