export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "AI Invoice Generator",
    slug: "ai-invoice-generator",
    description: "AI-powered SaaS for generating professional invoices with Gemini AI integration",
    detailedDescription:
      "A modern AI-powered Invoice Generator SaaS Web Application built with the MERN Stack (MongoDB, Express.js, React.js, Node.js) integrated with Gemini AI. This smart invoicing platform generates professional invoices in seconds using AI, manages clients, tracks payments, and provides real-time business insights.",
    image: "/invoice.jpg",
    tags: ["AI", "SaaS", "MERN", "Full-Stack", "Business"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Gemini AI", "Clerk Auth"],
    features: [
      "AI-powered invoice generation from plain text prompts",
      "Secure user authentication with Clerk",
      "Client and invoice management dashboard",
      "Real-time payment tracking (Paid/Unpaid/Overdue)",
      "Professional invoice templates",
      "Business insights and analytics",
    ],
    learningOutcomes: [
      "Full-stack SaaS application development with MERN",
      "Gemini AI integration for intelligent automation",
      "Secure authentication and user management",
      "RESTful API design with Express.js",
      "Database modeling with MongoDB schemas",
      "Production deployment strategies",
    ],
    links: {
      visit: "https://invoicegenerator-frontend-tdng.onrender.com",
      github: "https://github.com/HexagonDigitalServices/Invoice",
      howIBuilt: "https://youtu.be/2Mrwszudm9M?si=n34faY8CSOuH6iAi",
    },
    author: "AI Invoice Generator",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "2",
    title: "LMS Platform",
    slug: "lms-platform",
    description: "Complete Learning Management System with course management and user dashboards",
    detailedDescription:
      "A comprehensive Learning Management System (LMS) platform built with the MERN Stack. This real-world e-learning application includes course management, user enrollments, role-based authentication, and a powerful admin dashboard similar to platforms like Udemy and Coursera.",
    image: "/lms.jpg",
    tags: ["Education", "MERN", "Full-Stack", "E-learning"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Redux"],
    features: [
      "Course management system with categories",
      "User enrollment and progress tracking",
      "Role-based access (Admin/Instructor/Student)",
      "Interactive course player with video support",
      "Admin dashboard for user and course management",
      "Responsive mobile-friendly design",
    ],
    learningOutcomes: [
      "Authentication & role-based access control",
      "RESTful API development with Express.js",
      "MongoDB data modeling for complex relationships",
      "State management with Redux",
      "Protected routes and middleware implementation",
      "Full-stack application architecture",
    ],
    links: {
      visit: "https://l-m-s-web-frontend.onrender.com",
      github: "https://github.com/HexagonDigitalServices/L-M-S",
      howIBuilt: "https://youtu.be/lDg72UDAq60?si=keX7_pOq_QytNwO7",
    },
    author: "LMS Platform",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "3",
    title: "Resume Builder",
    slug: "resume-builder",
    description: "AI-powered resume creation platform with professional templates",
    detailedDescription:
      "A production-ready Resume Builder SaaS application built with the MERN Stack. This platform allows users to create, customize, and export professional resumes with AI-powered suggestions and multiple template options.",
    image: "/resume.jpg",
    tags: ["AI", "SaaS", "MERN", "Productivity"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "PDF Generation"],
    features: [
      "Multiple professional resume templates",
      "AI-powered content suggestions",
      "Real-time preview and editing",
      "PDF export functionality",
      "Resume tracking and versioning",
      "Mobile-optimized responsive design",
    ],
    learningOutcomes: [
      "End-to-end MERN stack development workflow",
      "PDF generation and export functionality",
      "Complex form handling and validation",
      "Responsive UI design with Tailwind CSS",
      "Database modeling for user data",
      "File handling and storage strategies",
    ],
    links: {
      visit: "https://resumexpert-frontend.onrender.com",
      github: "https://github.com/HexagonDigitalServices/BUILDRESUMEWEB",
      howIBuilt: "https://youtu.be/gWHgPP5ay7Q?si=FhtnDh4O7jm9rsEY",
    },
    author: "Resume Builder",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "4",
    title: "Task Manager",
    slug: "task-manager",
    description: "Productivity application for task management with team collaboration",
    detailedDescription:
      "A fully functional Task Manager application built with the MERN Stack. This productivity tool helps individuals and teams manage tasks, set priorities, track progress, and collaborate effectively with real-time updates.",
    image: "/task.jpg",
    tags: ["Productivity", "MERN", "Full-Stack", "Collaboration"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    features: [
      "Task creation with priority levels and deadlines",
      "Drag-and-drop task organization",
      "Team collaboration and assignment",
      "Progress tracking and analytics",
      "Real-time updates with WebSockets",
      "Calendar integration and reminders",
    ],
    learningOutcomes: [
      "Real-time application development with Socket.io",
      "CRUD operations implementation",
      "User authentication and authorization",
      "Database design for task management",
      "Frontend-backend integration",
      "Deployment and hosting strategies",
    ],
    links: {
      visit: "https://taskflow-frontend-6swl.onrender.com",
      github: "https://github.com/HexagonDigitalServices/FlowTask",
      howIBuilt: "https://youtu.be/VAKDr1lsix0?si=FZvPZSo2qIOTjiJD",
    },
    author: "Task Manager",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "5",
    title: "Food Delivery App",
    slug: "food-delivery-app",
    description: "Full-stack food ordering platform with restaurant management",
    detailedDescription:
      "A complete Food Delivery Web Application built with the MERN Stack. This platform connects restaurants with customers, featuring menu management, order processing, payment integration, and real-time order tracking.",
    image: "/food.jpg",
    tags: ["E-commerce", "MERN", "Full-Stack", "Payments"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe", "WhatsApp API"],
    features: [
      "Restaurant and menu management",
      "Shopping cart and checkout system",
      "Stripe payment integration",
      "Real-time order tracking",
      "WhatsApp order notifications",
      "Admin dashboard for order management",
    ],
    learningOutcomes: [
      "Payment gateway integration (Stripe)",
      "Third-party API integration (WhatsApp)",
      "E-commerce platform development",
      "Real-time data synchronization",
      "Geolocation and mapping services",
      "Multi-vendor platform architecture",
    ],
    links: {
      visit: "https://frenzyfood-frontend.onrender.com",
      github: "https://github.com/HexagonDigitalServices/Foodie-frenzy",
      howIBuilt: "https://youtu.be/6CL4f8fPk9w?si=eo8gxXCjMmd1xRUz",
    },
    author: "Food Delivery App",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "6",
    title: "Movie Ticket Booking",
    slug: "movie-ticket-booking",
    description: "Complete movie booking system with seat selection and payments",
    detailedDescription:
      "A professional Movie Ticket Booking Website built with the MERN Stack, similar to BookMyShow. This full-stack application features movie listings, seat selection, booking management, and payment processing with a modern user interface.",
    image: "/movie.jpg",
    tags: ["Booking", "MERN", "Full-Stack", "Entertainment"],
    status: "active",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Razorpay", "JWT"],
    features: [
      "Movie listings with showtimes",
      "Interactive seat selection layout",
      "Secure booking and payment system",
      "User authentication and booking history",
      "Admin panel for theater management",
      "Responsive design for all devices",
    ],
    learningOutcomes: [
      "Complex booking system logic",
      "Payment integration (Razorpay/Stripe)",
      "JWT authentication implementation",
      "Role-based access control",
      "Database design for booking systems",
      "Frontend animations and UX design",
    ],
    links: {
      visit: "https://moviebooking-frontend-rrwx.onrender.com",
      github: "https://github.com/HexagonDigitalServices/BOOKMOVIE",
      howIBuilt: "https://youtu.be/KQ7srsb8cfc?si=3m4Uk4mvYGF25Ykf",
    },
    author: "Movie Ticket Booking",
    authorAvatar: "/Hexagon.png",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}