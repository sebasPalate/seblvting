"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider, useTheme } from "next-themes";
import { AppProgressProvider } from "@bprogress/next";

import { META_THEME_COLORS } from "@/config/site";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { useMetaColor } from "@/hooks/use-meta-color";

import { Toaster } from "./ui/sonner";

function ThemeMetaColorSync() {
  const { resolvedTheme } = useTheme();
  const { setMetaColor } = useMetaColor();

  useEffect(() => {
    setMetaColor(resolvedTheme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light);
  }, [resolvedTheme, setMetaColor]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
    >
      <AppProgressProvider
        color="var(--foreground)"
        height="5px"
        delay={500}
        options={{ showSpinner: false }}
      >
        {children}
      </AppProgressProvider>
      <Toaster position="top-center" />
      <SmoothCursor />
      <Analytics />
      <SpeedInsights />
      <ThemeMetaColorSync />
    </ThemeProvider>
  );
}
