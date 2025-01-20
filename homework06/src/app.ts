import "reflect-metadata";

import config from "config";
import "dotenv/config";
import express from "express";

import httpLog from "./middleware/httpLog";
import connectDB from "./services/DatabaseConnection";

import healthcheckRouter from "./routes/healthcheck";
import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter';


const app = express();

const PORT = config.get("app.port");
const HOSTNAME = config.get("app.hostname");


app.use(httpLog);

app.use(express.json());

connectDB();

app.use("/healthcheck", healthcheckRouter);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);


app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});