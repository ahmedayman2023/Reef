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
