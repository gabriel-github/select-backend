import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PATCH, DELETE, GET, PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.use(router);

mongoose
  .connect(process.env.MONGO_CONNECTION as string)
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err.message);
  });

app.listen(3003, () => {
  console.log("server is running in http://localhost:3003/");
});
