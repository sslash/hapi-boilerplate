// const Poop = require('poop');
const Path = require('path');
const hapiAlive = require('hapi-alive');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');
const good = require('good');

const goodOptions = {

    dev: {
        console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*' }]
        }, {
            module: 'good-console',
            args: [{ log: '*', response: '*', ops: '*', error: '*', request: '*'}]
        }, 'stdout'],
        http: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ error: '*' }]
        }]
    },

    production: {

    }
}


module.exports = function plugins (config) {

    const plugins = [

        // process dumps

        // {
        //     register: Poop,
        //     options: {
        //         logPath: Path.join(__dirname, '..', 'logs', 'poop.log'),
        //         heapdumpFolder: Path.join(__dirname, '..', 'logs', 'dumps', 'poop.log')
        //     }
        // },

        // Swagger doc (/documentation)

        Inert,
        Vision,
        {
            register: HapiSwagger,
            options: {
                info: {
                    title: 'Circuits API Documentation',
                    version: Pack.version,
                }
            }
        },

        // process monitoring

        {
            register: good,
            options: {
                ops: {
                    interval: 1000
                },
                reporters: goodOptions[process.env.NODE_ENV || 'dev'] || {}
            }
        },

        // health checks

        {
            register: hapiAlive,
            options: {
                path: '/health', //Health route path
                tags: ['health', 'monitor'],
                healthCheck: function(server, callback) {
                    // Here you should preform your health checks
                    // If something went wrong provide the callback with an error
                    callback();
                }
            }
        }
    ];

    return plugins;
};
