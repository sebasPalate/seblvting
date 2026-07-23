import { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Sebastián ",
  lastName: "Palate",
  displayName: "Sebas Palate",
  username: "seblvting",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  timeZone: "America/Guayaquil",
  flipSentences: ["Fullstack Web Developer", "AI Agent Engineer", "UX/UI Designer"],
  address: "Ambato, Ecuador",
  phoneNumber: "KzU5Mzk5NTE0NTM3OA==", // E.164 format, base64-obfuscated (NOT encryption — trivially reversible)
  email: "c2ViYXMucGFsYXRlMTFAZ21haWwuY29t", // base64-obfuscated against basic scraping (NOT encryption — trivially reversible)
  website: "https://seblvting.vercel.app",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Fullstack Developer",
      company: "Tenpisoft",
      website: "https://tenpisoft.com",
    },
  ],
  about: `
- **Fullstack Developer** with **1+ year of experience** building scalable backend systems and production web applications.
- Work with **Next.js**, **Angular**, **Django** and **Spring Boot**, shipping features, system scalability, and production-ready implementations within agile teams.
- Creator of [SisDocx](/internal-project): a document management system built with **Java / Spring Boot**, **Angular**, **Oracle** and **Hibernate**.
  - Handles document management (minutes, policies, technical reports), document tracking, and delivery status monitoring under distributed quality processes for the electrical sector.
- Currently deepening **System Design** and **AI** — closing the loop from idea to intelligent deployment, because that's the actual problem worth solving.
`,
  avatar: "/images/me.jpg",
  keywords: [
    "sebas palate",
    "sebastián palate",
    "seblvting",
    "fullstack developer",
    "java developer",
    "spring boot developer",
    "angular developer",
    "react developer",
    "nextjs developer",
    "desktop app developer",
    "nodejs developer",
  ],
  dateCreated: "2026-07-30", // YYYY-MM-DD
};
