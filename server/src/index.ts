import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "success!!!" });
});

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log("Server running");
});
