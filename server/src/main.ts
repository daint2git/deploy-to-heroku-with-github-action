import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (_, res) => {
  const env = { ABC: process.env.ABC }
  res.send("Hello World, env: " + JSON.stringify(env));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
