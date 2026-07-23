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
  flipSentences: [
    "Fullstack Web Developer",
    "AI Agent Engineer",
    "UX/UI Designer",
  ],
  address: "Ambato, Ecuador",
  phoneNumber: "KzU5Mzk5NTE0NTM3OA==", // E.164 format, base64 encoded
  email: "c2ViYXMucGFsYXRlMTFAZ21haWwuY29t", // base64 encoded
  website: "https://seblvting.vercel.app",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Fullstack Developer",
      company: "Tenpisoft",
      website: "https://tenpisoft.com",
    },
    {
      title: "Founder",
      company: "Levting",
      website: "/internal-project",
    },
  ],
  about: `
- **Fullstack Developer** with **2+ years of experience** building scalable backend systems and modern web applications in real-world environments.
- Experience in **Next.js**, **Angular**, **Django** and **Springboot**; creating scalable web applications for clients, contributing to the development of functionalities, system scalability and production-ready implementations within agile teams.
- Believe in modern, efficient, and scalable software. That's why I continually delve into DevOps, automation, and explore the potential of Artificial Intelligence, seeking to close the entire cycle: from idea and design to intelligent deployment.
- Creator of [SisDocx](/internal-project/sisdocx): modern document management system
  - Built with  **Java / Spring Boot**, **Angular**, **Oracle** and **Hibernate**.
  - Document management (minutes, policies, technical reports), document tracking, and delivery status monitoring under distributed quality processes for the electrical sector.
- **Passionate** about exploring new technologies and turning ideas into reality through polished, production-ready projects. Currently exploring **System Design** and aiming to venture into **AI**.
- **Mission:** Creating software that delivers exceptional user experiences while constantly adapting to stay at the forefront of technology.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
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
