import http from "http";
import cors from "cors";
import express from "express";

import userRouter from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(userRouter);

const server = http.createServer(app);
server.listen(3333, () => {
  console.log("HTTP server running on http://localhost:3333");
});
