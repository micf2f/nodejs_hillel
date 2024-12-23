import colors from "colors/safe.js";


export default function getLogger(prefix) {

    const colorMap = {
        log: colors.green,
        warn: colors.yellow,
    };

    const formatPrefix = (method) => {
        if (process.env.COLORS_ENABLED === '0') return `${prefix}:`;
        return colorMap[method](`${prefix}:`);
    };


    return Object.keys(colorMap).reduce((logger, method) => {

        logger[method] = (message) => {
            console[method === 'log' ? 'log' : 'error'](formatPrefix(method), message);
        };

        return logger;

    }, {});

}
