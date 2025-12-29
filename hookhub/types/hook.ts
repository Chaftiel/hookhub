export interface Hook {
  id: string;
  name: string;
  category: string;
  description: string;
  repoUrl: string;
  stars?: number;
  language?: string;
  lastUpdated?: string;
}

export type Category =
  | "CI/CD"
  | "Deployment"
  | "Database"
  | "Security"
  | "Notifications"
  | "Infrastructure"
  | "Testing"
  | "Monitoring";

export const CATEGORIES: Category[] = [
  "CI/CD",
  "Deployment",
  "Database",
  "Security",
  "Notifications",
  "Infrastructure",
  "Testing",
  "Monitoring",
];
