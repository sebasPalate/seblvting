import { USER } from "@/features/profile/data/user";
import { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://seblvting.vercel.app",
  ogImage: `${process.env.APP_URL || "https://seblvting.vercel.app"}/og/simple?title=seblvting`,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
];

export const GITHUB_USERNAME = "sebasPalate";
export const SOURCE_CODE_GITHUB_REPO = "sebasPalate/seblvting";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/sebasPalate/seblvting";

export const UTM_PARAMS = {
  utm_source: "https://seblvting.me",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
