import colors from "colors/safe.js";
import config from "config";
import fs from "fs";


export default function getLogger(prefix: string)  {

    const useColors = config.get("app.colors");
    const logStream = fs.createWriteStream('src/logs/server.log', { flags: 'a' });

    const formatPrefix = (message: string, colorFn?: (text: string) => string) => 
        colorFn && useColors ? colorFn(`${prefix}:`) : `${prefix}:`;

    return {
        log(message: string) {
            console.log(formatPrefix(prefix, colors.green), message);
            logStream.write(`${prefix}: ${message}\n`);
        },
        warn(message: string) {
            console.error(formatPrefix(prefix, colors.yellow), message);
            logStream.write(`${prefix}: ${message}\n`);
        }
    };

}
