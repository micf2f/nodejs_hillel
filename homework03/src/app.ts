import config from "config";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";

import healthcheckRouter from "./routes/healthcheck";
import httpLog from "./middleware/httpLog";


const app = express();

const PORT = process.env.APP_PORT ? process.env.APP_PORT : config.get("app_port");
const HOSTNAME = process.env.APP_HOSTNAME ? process.env.APP_HOSTNAME : config.get("app_host");


app.use(httpLog);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use("/healthcheck", healthcheckRouter);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});