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
- Contribute to system scalability and reliability by evaluating architectural decisions and adapting to new requirements.
- Collaborate with cross-functional teams in a remote environment.
- Optimize application performance and ensure code quality.`,
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
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Part-time",
        description: `**Key Projects:**

- **[Sisdocx - MERM Version](/internal-project)** - Developed a document management platform frontend using React, Redux Toolkit, and RTK Query, integrated with a Django backend for patient workflows, document processing, authentication with Djoser, and SLA monitoring.

- **[Ecosistemx](/internal-project)** - IoT platform for environmental monitoring of greenhouses. It integrates an ESP32 and temperature and humidity sensors to capture environmental data, which is processed by a Node.js backend and visualized via a Next.js frontend. The project was conceived as a university prototype and its architecture is scalable to Wi-Fi and MQTT-based communication for production deployments.`,
        icon: "code",
        skills: [
          "System Design",
          "Arduino IDE",
          "ESP32",
          "IoT",
          "React",
          "Next.js",
          "Redux Toolkit",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Django",
          "Djoser",
          "RTK Query",
          "PostgreSQL",
          "API Integration",
        ],
        isExpanded: true,
      },
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
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Atahualpa Educational Unit",
        employmentPeriod: {
          start: "08.2016",
          end: "08.2019",
        },
        icon: "education",
        description: `- Completed a three-year technical high school program specializing in **Electronics**.
- Studied analog and digital electronics, electrical circuits, microcontrollers, and industrial automation.
- Developed practical projects involving electronic circuits and embedded systems.`,
        skills: [
          "Analog Electronics",
          "Digital Electronics",
          "Electrical Circuits",
          "Microcontrollers",
          "Embedded Systems",
        ],
      },
    ],
  },
];
