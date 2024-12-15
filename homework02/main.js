import logger from "./utils/logger.js";
import "dotenv/config";


const {log, warn} = logger('main');

log("the script is running!");
warn("warning!");

