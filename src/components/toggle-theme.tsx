"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";

import { MoonIcon } from "./animated-icons/moon";
import { SunMediumIcon } from "./animated-icons/sun-medium";
import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/use-sound";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const playClick = useSound("/audio/ui-sounds/click.wav");

  const switchTheme = useCallback(() => {
    playClick();
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme, playClick]);

  return (
    <Button variant="ghost" size="icon" onClick={switchTheme}>
      <MoonIcon className="relative hidden after:absolute after:-inset-2 [html.dark_&]:block" />
      <SunMediumIcon className="relative hidden after:absolute after:-inset-2 [html.light_&]:block" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
