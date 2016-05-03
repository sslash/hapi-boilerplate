'use strict';
const logger = require('./logger').createLogger(__filename);

const options = {
    promiseLib: require('bluebird')
};
/**
 * Craete a global singleton db handle for postgres
 * https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example
 */
const pgp = require('pg-promise')(options);


if (process.env.NODE_ENV !== 'production') {
    var monitor = require('pg-monitor');

    monitor.attach(options); // attach to all query events;
    // See API: https://github.com/vitaly-t/pg-monitor#attachoptions-events-override

    monitor.setTheme('matrix'); // change the default theme;
    // Other themes: https://github.com/vitaly-t/pg-monitor/wiki/Color-Themes

    monitor.log = function (msg, info) {
        // save the screen messages into your own log file;
    };
}

const cn = 'postgres://postgres@localhost:5432/circuits-development';
const db = pgp(cn);

module.exports = db;
