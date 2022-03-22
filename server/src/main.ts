import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (_, res) => {
  res.json(process.env);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
