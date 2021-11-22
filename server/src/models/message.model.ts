import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    message: String,
  },
  { collection: "collection" }
);

export const Message = mongoose.model("Message-Obj", MessageSchema);
