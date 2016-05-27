'use strict';
var pjson = require('./package.json');

let server = require('./config/server');
const logger = require('./lib/helpers/logger').createLogger(__filename);

server.start((err) => {
    if (err) {
        logger.warn('Failed to run server ', err);
        throw err;
    }
    logger.info({what: 'Server running', uri: server.info.uri, version: pjson.version});
});
