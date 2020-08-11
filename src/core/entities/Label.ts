import { Document } from "mongoose";

export interface Label {
  id: string;
  value: string;
  color: string;
}

export interface LabelDocument extends Document, Omit<Label, "id"> {}
