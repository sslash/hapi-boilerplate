'use strict';

// Dependencies
const Hapi = require('hapi');

// Configurations files
const parameters = require('./parameters');
const plugins = require('./plugins')(parameters);
const routes = require('./routes');
const logger = require('../lib/helpers/logger').createLogger(__filename);
const pingPg = require('../lib/helpers/pingPg');

const server = new Hapi.Server();
server.connection({
    host: parameters.server.host,
    port: parameters.server.port
});

server.register(plugins, (err) => {
    if (err) {
        throw err;
    }
    console.log('server plugins was successfull loaded');
});

server.route(routes({server}));

function kill (err) {
    logger.error('Failed to start server', err);
    process.exit(1);
}


pingPg().catch(kill);

module.exports = server;
