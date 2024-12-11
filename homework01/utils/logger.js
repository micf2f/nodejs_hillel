module.exports = function getLogger(prefix) {

    return {
        log(message) {
            console.log(`${prefix}:`, message);
        },
        warn(message) {
            console.error(`${prefix}:`, message);
        },
    }
    
}