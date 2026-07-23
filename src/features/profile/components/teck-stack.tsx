import Image from "next/image";

import { cn } from "@/lib/utils";

import { TECH_STACK } from "@/features/profile/data/tech-stack";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/features/profile/components/panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75",
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      src={tech.iconUrl}
                      alt={`${tech.title} icon`}
                      width={32}
                      height={32}
                      unoptimized
                      className={cn(
                        "h-8 w-8 transition-transform hover:scale-110 object-contain",
                        tech.theme && "dark:invert",
                      )}
                    />
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
