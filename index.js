'use strict';
// Perform babel transforms defined in .babelrc (ES6, JSX, etc.) on server-side code
// Note: the options in .babelrc are also used for client-side code
// because we use a babel loader in webpack config
require('babel-register');
require("babel-polyfill");

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
