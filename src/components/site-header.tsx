import { cn } from "@/lib/utils";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MAIN_NAV } from "@/config/site";
import { NavItemGitHub } from "@/components/nav-item-github";
import { SiteHeaderWrapper } from "./site-header-wrapper";
import { SiteHeaderMark } from "./site-header-mark";
import { ToggleTheme } from "./toggle-theme";

const MobileNav = dynamic(() => import("@/components/mobile-nav").then((mod) => mod.MobileNav));

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu),
);

export function SiteHeader() {
  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]",
        "not-dark:data-[affix=true]:**:data-header-container:after:bg-border",
        "transition-shadow duration-300",
      )}
      role="navigation"
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container
      >
        <div>
          <Link
            className="has-data-[visible=false]:pointer-events-none [&_svg]:h-8"
            href="/"
            aria-label="Home"
          >
            <SiteHeaderMark />
          </Link>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <CommandMenu />
          <NavItemGitHub />
          <span className="mx-2 flex h-4 w-px bg-border" />
          <ToggleTheme />
          <MobileNav className="sm:hidden" items={MAIN_NAV} />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
