import mongoose from "mongoose";

import { LabelSchema } from "./LabelModel";
import { URLSchema } from "./URLModel";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true },

  labels: { type: [LabelSchema], default: [] },
  urls: { type: [URLSchema], default: [] },
});

export default mongoose.model("users", UserSchema);
