"use client";

import { PhoneIcon } from "lucide-react";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { decodePhoneNumber, formatPhoneNumber } from "@/lib/string";
import { useIsClient } from "@/hooks/use-is-client";

type PhoneItemProps = {
  phoneNumber: string;
};

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  const isClient = useIsClient();
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber);
  const isEcuadorNumber = phoneNumberDecoded.startsWith("+593");

  return (
    <IntroItem>
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={isClient ? `tel:${phoneNumberDecoded}` : "#"}
          aria-label={
            isClient
              ? `Call ${formatPhoneNumber(phoneNumberDecoded)}`
              : "Phone number"
          }
        >
          {isClient
            ? formatPhoneNumber(phoneNumberDecoded)
            : "[Phone protected]"}
        </IntroItemLink>
        {isClient && isEcuadorNumber && (
          <span className="text-muted-foreground" aria-hidden="true">
            {" // Ambato, EC"}
          </span>
        )}
      </IntroItemContent>
    </IntroItem>
  );
}
