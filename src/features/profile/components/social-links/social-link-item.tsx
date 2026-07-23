import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { SocialLink } from "@/features/profile/types/social-links";
import { Icons } from "@/components/icons";

const BRAND_SOCIAL_ICONS: Record<string, keyof typeof Icons> = {
  github: "github",
} as const;

function isBrandIcon(url: string): keyof typeof Icons | null {
  for (const [key, iconKey] of Object.entries(BRAND_SOCIAL_ICONS)) {
    if (url.includes(key)) return iconKey;
  }
  return null;
}

export function SocialLinkItem({ icon, title, description, href, padding }: SocialLink) {
  const brandIcon = isBrandIcon(icon);
  const IconComponent = brandIcon ? Icons[brandIcon] : null;

  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after",
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="relative flex size-12 shrink-0 items-center justify-center">
        {IconComponent ? (
          <IconComponent className="size-7 text-foreground" />
        ) : (
          <Image
            className={`rounded-xl object-contain ${padding && "p-1.75"}`}
            src={icon}
            alt={title}
            width={48}
            height={48}
            quality={100}
            unoptimized
          />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
