'use strict';

// Dependencies
const Hapi = require('hapi');

// Configurations files
const parameters = require('./parameters');
const plugins = require('./plugins')(parameters);
const routes = require('./routes');
const logger = require('../lib/helpers/logger').createLogger(__filename);
const pingPg = require('../lib/helpers/pingPg');


const config = require('../lib/config/variables');
const path = require('path');
const HapiReactViews = require('hapi-react-views');

const server = new Hapi.Server();
server.connection({
    port: process.env.PORT || 4444
});

server.register(plugins, (err) => {
    if (err) {
        throw err;
    }
    logger.info('server plugins was successfull loaded');
});

server.route(routes({ server }));


/**
 * Frontend stuff
 */


// Set up server side react views using Vision
server.views({
    engines: { jsx: HapiReactViews },
    path: config.paths.serverViews
});

// Note: only one route per will be used to fulfill a request.
// In case of multiple routes matching the URL, the most "specific" route wins.
// See http://hapijs.com/api#path-matching-order

// Serve all files from the assets directory
// Note: in production this also serves webpack bundles
server.route({
    method: 'GET',
    path: config.publicPaths.assets + '{path*}',
    handler: {
        directory: {
            path: config.paths.assets,
            index: false,
            listing: false,
            showHidden: false
        }
    },
    config: {
        state: {
            parse: false, // parse and store in request.state
            failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    }
});


// Serve white-listed files from the webRoot directory
config.server.publicFiles.forEach(
    (filename) => {
        server.route({
            method: 'GET',
            path: '/' + filename,
            handler: {
                file: {
                    path: path.join(config.paths.webRoot, filename)
                }
            },
            config: {
                state: {
                    parse: false, // parse and store in request.state
                    failAction: 'ignore' // may also be 'ignore' or 'log'
                }
            }
        });
    }
);

// catch all route??


// App
server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'app' // app.jsx in /views
    },
    config: {
        state: {
            parse: false, // parse and store in request.state
            failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    }
});


// DEV SETUP
if (process.env.NODE_ENV === 'development') {
    // Proxy webpack assets requests to webpack-dev-server
    // Note: in development webpack bundles are served from memory, not filesystem
    server.route({
        method: 'GET',
        path: config.publicPaths.build + '{path*}', // this includes HMR patches, not just webpack bundle files
        handler: {
            proxy: {
                host: config.server.host,
                port: config.webpack.port,
                passThrough: true
            }
        },
        config: {
            state: {
                parse: false, // parse and store in request.state
                failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        }
    });

    // Note: We also make requests to Webpack Dev Server EventSource endpoint (typically /__webpack_hmr).
    // We don't need to proxy these requests because we configured webpack-hot-middleware
    // to request them directly from a webpack dev server URL in webpack-config.js

    // Enable a separate sandbox.
    // Use it to work on individual components outside of your application context.
    server.route({
        method: 'GET',
        path: '/sandbox',
        handler: {
            view: 'sandbox' // sandbox.jsx in /views
        },
        config: {
            state: {
                parse: false, // parse and store in request.state
                failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        }
    });
}

function kill(err) {
    logger.error('Failed to start server', err);
    process.exit(1);
}



pingPg().catch(kill);

module.exports = server;
