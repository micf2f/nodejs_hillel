import { Router, Request, Response } from "express";


interface Healthcheck {
    live: boolean;
    timestamp: string;
}

const router = Router();
const healthcheck: Healthcheck = {
    live: true,
    timestamp: new Date().toUTCString()
};

router.get("/", (req: Request, res: Response) => {
    res.json(healthcheck);
});

export default router;