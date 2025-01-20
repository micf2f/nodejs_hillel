import { Request, Response, NextFunction } from "express";

import getLogger from "../utils/logger";


const logger = getLogger('app');

const httpLog = (req: Request, res: Response, next: NextFunction) => {
    logger.log(`${req.method} ${req.url}`);
    next();
};

export default httpLog;