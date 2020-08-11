import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const URLSchema = new Schema({
  id: { type: String, required: true },
  href: { type: String, required: true },
  title: { type: String, required: true },
  labels: [{ type: String, ref: "label", required: true }],
  created: { type: Number },
  updated: { type: Number },
});

export default mongoose.model("url", URLSchema);
