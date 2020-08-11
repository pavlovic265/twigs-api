import { Document } from "mongoose";
import { URL, Label } from "core/entities";

export interface User {
  id: string;
  username: string;
  avatar: string;
  email: string;
  name: string;
  labels: Label[];
  urls: URL[];
}

export interface UserDocument extends Document, Omit<User, "id"> {}
