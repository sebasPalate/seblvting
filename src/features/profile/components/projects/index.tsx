import { ProjectItem } from "./project-item";
import { PROJECTS } from "@/features/profile/data/projects";
import { Panel, PanelHeader, PanelTitle } from "@/features/profile/components/panel";
import { CollapsibleList } from "@/components/collapsible-list";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
