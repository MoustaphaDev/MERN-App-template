import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import { getIpAddress } from "./utils/ipAdress";
import { Message } from "./models/message.model";

config();

const app = express();
const { PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI as string);

app.use(cors());

app.get("/", async (req, res) => {
  const dummyData: { message: string } = await Message.findOne({
    message: { $exists: true },
  });

  res.json(dummyData);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server running on http://localhost:${PORT}/, http://${getIpAddress()}:${PORT}/ on the local network`
  );
});
