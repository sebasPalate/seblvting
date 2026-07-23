import { Project } from "@/features/profile/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "document-management-system",
    title: "SisDocx - Document Management System",
    period: { start: "06.2024" },
    link: "https://github.com/sebasPalate/SisDocx",
    skills: [
      "Angular",
      "Angular.js",
      "Oracle SQL",
      "Spring Boot",
      "Hibernate",
      "REST APIs",
      "JWT Authentication",
    ],
    isExpanded: true,

    description: `Enterprise document management system for workflows developed using the Oracle platform, Angular, and Spring Boot.
- JWT authentication and technical document management.
- REST API-based architecture with role-based access control (RBAC) for secure document management
- Centralized management of technical documents across multiple departments.
- Developed as part of an academic thesis project in collaboration with EEASA.`,
    logo: "",
  },
  {
    id: "color-prediction",
    title: "Colorx - Color Prediction App",
    period: { start: "06.2024" },
    link: "https://github.com/sebasPalate/Colorx",
    skills: ["Python", "OpenCV", "YOLO", "Image Processing", "Computer Vision"],
    description: `A computer vision system in Python using OpenCV with YOLO.
- Computer vision for color classification of garments using image processing techniques.
- Achieved 89% accuracy on a dataset of over 1200 images.
- Feature extraction and preprocessing techniques.`,
    logo: "",
  },
  {
    id: "factx-invoice-system",
    title: "Factx - Electronic Invoicing System",
    period: { start: "06.2024", end: "10.2024" },
    link: "https://github.com/sebasPalate/Factx",
    skills: [
      "Java",
      "Spring Boot",
      "WebFlux",
      "JavaScript",
      "Bootstrap",
      "API Integration",
      "SRI Integration",
      "Electronic Invoicing",
    ],
    description: `Electronic invoicing frontend system connected to the SRI (Internal Revenue Service) in a production environment.  
- Based on Java/Spring Boot with WebFlux to build entities and receive data via an API.
- Frontend built with JavaScript and uses Bootstrap to provide an interactive user interface.
- Allows for easy and fast management of electronic invoices, integrating with SRI services for invoice validation and submission.`,
    logo: "",
  },

  {
    id: "jersan",
    title: "Jersan",
    period: { start: "01.2022", end: "06.2022" },
    link: "https://github.com/sebasPalate/Jersan",
    skills: [
      "Kotlin",
      "Firebase",
      "Room",
      "Android Studio",
      "Material Design",
      "MVVM",
      "Jetpack Compose",
      "LiveData",
      "ViewModel",
      "Navigation Component",
    ],
    description: `Mobile application for managing vehicle reservations, developed with Kotlin and Firebase.
- Allows users to make reservations based on availability.
- CRUD operations for vehicle, staff, and support reservations.
- Uses Room to manage the local reservation database.`,
    logo: "",
  },
];
