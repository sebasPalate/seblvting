import { Experience } from "@/features/profile/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "tenpisoft",
    companyName: "Tenpisoft",
    companyLogo: "/images/experience/tenpisoft.jfif",
    positions: [
      {
        id: "tenpisoft-fullstack-dev",
        title: "Fullstack Developer (Freelance)",
        employmentPeriod: {
          start: "08.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop and maintain features across multiple client projects within Agile (Scrum) environments.
- Build and optimize backend systems and APIs using Next.js, Django, and Supabase.
- Design and implement scalable data models and workflows, analyzing database structures to support evolving system requirements.
- Deploy and manage development environments using Docker, ensuring consistency across local and production setups.
- Design and enforce Row-Level Security (RLS) policies in Supabase, securing data access across client projects and shaping how the database is consumed.`,
        skills: [
          "React.js",
          "Next.js",
          "Supabase",
          "JavaScript",
          "TypeScript",
          "Python",
          "Django",
          "Docker",
          "PostgreSQL",
          "RESTful APIs",
          "SaaS Development",
          "Remote Work",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
    theme: true,
  },
  {
    id: "eeasa",
    companyName: "Regional Electrical Company of the North Center S.A. (EEASA)",
    companyLogo: "/images/experience/eeasa.jpg",
    positions: [
      {
        id: "eeasa-software-engineer",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "07.2024",
          end: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed and maintained features with REST endpoints using **Java / Spring Boot** and **Oracle Database**.
- Analyzed electrical distribution data and document workflows using **SQL** and **Python**.
- Identified inefficiencies in manual document management processes.
- Design and development of SisDocx, digitizing internal workflows to improve document traceability and reduce manual handling.
- Collaborate with stakeholders to gather requirements and implement solutions that enhance operational efficiency.`,
        skills: [
          "Angular",
          "Angular Material",
          "Angular CLI",
          "Flowbite",
          "Java",
          "Spring Boot",
          "Maven",
          "Oracle Database",
          "Oracle WebLogic Server",
          "RESTful APIs",
          "Web Development",
          "Desktop Development",
          "Problem-solving",
        ],
      },
    ],
    theme: true,
  },
  {
    id: "uta",
    companyName: "Technical University of Ambato (UTA)",
    companyLogo: "/images/experience/uta.png",
    positions: [
      {
        id: "institutional-support-technician",
        title: "Institutional Support Technician",
        employmentPeriod: {
          start: "07.2023",
          end: "09.2023",
        },
        employmentType: "Internship Contract",
        icon: "code",
        description: `- Managed networks and cabling, implementing solutions for recurring problems.
- Collaborated across departments to improve operational efficiency.
- Contributed to admissions management strategies, optimizing the onboarding of new students.`,
        skills: [
          "Network Administration",
          "Cabling",
          "IT Support",
          "Troubleshooting",
          "Software Installation",
          "Hardware Maintenance",
          "System Configuration",
          "Institutional Support",
          "Admissions Management",
          "Process Optimization",
        ],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "UI/UX",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Part-time",
        description: `**Key Projects:**

- **[JCI Ambato](https://www.jciambato.org/)** - Built a web site with Next.js and Tailwind CSS. Implemented responsive design, interactive elements, and optimized performance for a seamless user experience.`,
        icon: "design",
        skills: [
          "Next.js",
          "UI/UX Design",
          "Figma",
          "Hero UI",
          "Framer Motion",
          "Shadcn",
          "Tailwind CSS",
          "Swiper.js",
          "Clarity Analytics",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Technical University of Ambato (UTA)",
        employmentPeriod: {
          start: "09.2019",
          end: "07.2025",
        },
        icon: "education",
        description: `- Bachelor's Degree in **Software Engineering**.`,
        skills: [
          "Software Development",
          "Object-Oriented Programming (OOP)",
          "Data Structures & Algorithms",
          "Web Development",
          "Database Management System (DBMS)",
          "Programming Fundamentals",
          "Operating Systems",
          "Software Engineering",
          "Computer Networks",
          "Cloud Computing",
          "Artificial Intelligence",
        ],
      },
    ],
  },
];
