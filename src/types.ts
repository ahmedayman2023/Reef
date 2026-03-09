import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: LucideIcon;
  longDescription?: string;
  longDescriptionAr?: string;
  benefits?: string[];
  benefitsAr?: string[];
  process?: { step: number; title: string; titleAr: string; description: string; descriptionAr: string }[];
  image?: string;
}

export interface Project {
  id: number;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  image: string;
  description?: string;
  descriptionAr?: string;
  location?: string;
  locationAr?: string;
  year?: string;
  area?: string;
  status?: string;
  statusAr?: string;
  supervisor?: {
    name: string;
    nameAr: string;
    role: string;
    roleAr: string;
    image: string;
    bio?: string;
    bioAr?: string;
    challengesSolved?: string[];
    challengesSolvedAr?: string[];
  };
  gallery?: string[];
  results?: string[];
  resultsAr?: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  date: string;
  author: string;
  authorAr: string;
  image: string;
  category: string;
  categoryAr: string;
}

export interface TeamMember {
  id: number;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  image: string;
  bio?: string;
  bioAr?: string;
}
