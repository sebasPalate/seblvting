import { Markdown } from "@/components/markdown";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/profile/components/panel";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/features/profile/data/user";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
