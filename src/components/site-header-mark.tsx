"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SeblvtingMark } from "./seblvting-mark";
import Image from "next/image";

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  <SeblvtingMark
    data-visible={visible}
    className="translate-y-2 opacity-0 transition-[opacity,translate] duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
  />;

  return (
    <div className="relative w-7.5 h-7.5 ml-1">
      <Image
        data-visible={visible}
        src="/images/brand/lvting-logo-dark.svg"
        alt="Imagen de portada de seblvting"
        width={30}
        height={30}
        priority={true}
        className="absolute inset-0 object-cover object-center translate-y-2 opacity-0 transition-[opacity,translate] duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 dark:hidden"
      />

      <Image
        data-visible={visible}
        src="/images/brand/lvting-logo-light.svg"
        alt="Imagen de portada de seblvting"
        width={30}
        height={30}
        priority={true}
        className="absolute inset-0 object-cover object-center translate-y-2 opacity-0 transition-[opacity,translate] duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 hidden dark:block"
      />
    </div>
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  const isHome = ["/", "/index"].includes(pathname);
  return isHome ? <ChanhDaiMarkMotion /> : <SeblvtingMark />;
}
