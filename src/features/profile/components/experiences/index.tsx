import { ExperienceItem } from "./experience-item";
import { EXPERIENCES } from "@/features/profile/data/experiences";
import { Panel, PanelHeader, PanelTitle } from "@/features/profile/components/panel";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}
