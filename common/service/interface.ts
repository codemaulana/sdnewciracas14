import { LoginInput } from "../lib/zodSchema";

export interface ActionResult {
  errors?: Record<string, string[]>;
  values?: Partial<LoginInput>;
  success?: boolean;
}

export interface ActionState {
  errors?: Record<string, string[]>;
  values?: Partial<LoginInput>;
  success?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  judul: string;
  image: string;
  author: string;
  content: string;
  viewCount: number;
  kategori?: string;
  createdAt: Date;
}

export interface Articles {
  data: Article;
}
