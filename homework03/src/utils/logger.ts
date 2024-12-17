import colors from "colors/safe.js";
import config from "config";
import fs from "fs";


export default function getLogger(prefix: string)  {

    const formatPrefix = process.env.COLORS_ENABLED ? process.env.COLORS_ENABLED === '0' : config.get("colors");
    const logStream = fs.createWriteStream('src/logs/server.log', { flags: 'a' });

    if (!formatPrefix) {

        return {
            log(message) {
                console.log(colors.green(`${prefix}:`), message);
                logStream.write(`${message}\n`);
            },
            warn(message) {
                console.error(colors.yellow(`${prefix}:`), message);
                logStream.write(`${message}\n`);
            },
        }

    } else {

        return {
            log(message) {
                console.log(`${prefix}:`, message);
                logStream.write(`${message}\n`);
            },
            warn(message) {
                console.error(`${prefix}:`, message);
                logStream.write(`${message}\n`);
            },
        }
        
    }

}
