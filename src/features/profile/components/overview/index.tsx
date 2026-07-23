import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";
import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";
import { Panel } from "@/features/profile/components/panel";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <div className="p-4 space-y-2.5">
        <JobItem
          title={USER.jobs[0].title}
          company={USER.jobs[0].company}
          website={USER.jobs[0].website}
        />

        <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                aria-label={`Location: ${USER.address}`}
              >
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>
              {USER.gender === "male" ? <MarsIcon /> : <VenusIcon />}
            </IntroItemIcon>
            <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
              {USER.pronouns}
            </IntroItemContent>
          </IntroItem>

          <PhoneItem phoneNumber={USER.phoneNumber} />

          <CurrentLocalTimeItem timeZone={USER.timeZone} />

          <EmailItem email={USER.email} />

          <IntroItem>
            <IntroItemIcon>
              <GlobeIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={USER.website}
                aria-label={`Personal website: ${urlToName(USER.website)}`}
              >
                {urlToName(USER.website)}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>
        </div>
      </div>
    </Panel>
  );
}
