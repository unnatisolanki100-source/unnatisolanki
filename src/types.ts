export interface Project {
  id: string;
  title: string;
  category: "Data & Analytics" | "Creative Writing" | "Web Design";
  description: string;
  techStack: string[];
  features?: string[];
  link?: string;
  isComingSoon?: boolean;
  // Specific fields for analytics
  keyMetrics?: { label: string; value: string }[];
  insights?: string[];
  // Specific fields for writing
  genre?: string;
  format?: string;
  status?: string;
  logline?: string;
  episodes?: { num: number; title: string; synopsis: string }[];
}

export interface Skill {
  name: string;
  level?: string; // e.g. "Advanced", "Intermediate"
  category: "Analytics & Tools" | "Programming & Web" | "Writing & Creative";
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  duration?: string;
}

export interface EducationItem {
  id: string;
  subject: string;
  provider: string; // e.g. self-learned, certified, coursework
  description: string;
  status: "Completed" | "Ongoing" | "In-Progress";
  skillsLearned: string[];
}
