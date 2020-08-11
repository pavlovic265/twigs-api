import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const LabelSchema = new Schema({
  id: { type: String, required: true },
  value: { type: String, required: true },
  color: { type: String, required: true },
  created: { type: Number },
  updated: { type: Number },
});

export default mongoose.model("label", LabelSchema);
