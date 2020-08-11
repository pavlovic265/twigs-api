import mongoose from "mongoose";
import env from "config/env";

export default function databaseConnection(): void {
  try {
    mongoose.connect(env.vars.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      poolSize: 10,
    });
  } catch (e) {
    throw e;
  }
}
