import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";
import { Button } from "@/components/ui/button";

export async function NavItemGitHub() {
  return (
    <Button variant="ghost" size="icon" asChild>
      <a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
        <Icons.github />
        <span className="sr-only">GitHub</span>
      </a>
    </Button>
  );
}
