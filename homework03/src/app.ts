import config from "config";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";

import healthcheckRouter from "./routes/healthcheck";
import httpLog from "./middleware/httpLog";


const app = express();

const PORT = config.get("app.port");
const HOSTNAME = config.get("app.hostname");


app.use(httpLog);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use("/healthcheck", healthcheckRouter);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});