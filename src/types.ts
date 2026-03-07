import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: LucideIcon;
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
