import { Document } from "mongoose";

export interface URL {
  id: string;
  href: string;
  labels: string[];
  title: string;
}

export interface URLDocument extends Document, Omit<URL, "id"> {}
