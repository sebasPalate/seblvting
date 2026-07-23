"use client";

import dayjs from "dayjs";
import { use } from "react";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { GITHUB_USERNAME } from "@/config/site";

export function GitHubContributionGraph({ contributions }: { contributions: Promise<Activity[]> }) {
  const data = use(contributions);

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar className="no-scrollbar px-2" title="GitHub Contributions">
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>

            <TooltipContent className="font-sans" sideOffset={0}>
              <p>
                {activity.count} contribution{activity.count > 1 ? "s" : null} on{" "}
                {dayjs(activity.date).format("DD.MM.YYYY")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} contributions in {year + 1} on{" "}
              <a
                className="font-medium underline underline-offset-4"
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              <span className="text-muted-foreground/70"> and 1,000+ on private client repos</span>.
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full flex-col items-center justify-center gap-3 px-2">
      {/* Grilla simulada de 8 columnas × 7 filas */}
      <div className="flex gap-0.75" aria-hidden="true">
        {Array.from({ length: 8 }, (_, col) => (
          <div key={col} className="flex flex-col gap-0.75">
            {Array.from({ length: 7 }, (_, row) => (
              <div
                key={row}
                className="size-2.75 animate-pulse rounded-[2px] bg-muted/60"
                style={{ animationDelay: `${(col * 7 + row) * 30}ms` }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Placeholder del footer: texto + leyenda */}
      <div className="flex w-full items-center justify-between px-2">
        <div className="h-3 w-56 animate-pulse rounded bg-muted/50" />
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="size-3 animate-pulse rounded-sm bg-muted/50"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
