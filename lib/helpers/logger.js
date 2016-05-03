'use strict';
const Log = require('logfilename');
const _ = require('lodash');

let opts = process.env.NODE_ENV === 'production' ?
    {
        console: {
            level: 'info'
        }
    } :
    {
        console: {
            level: 'debug'
        }
    };

function createLogger(filename, options) {
    return new Log(filename, _.merge({}, opts, options));
}

module.exports = {
    createLogger
};
