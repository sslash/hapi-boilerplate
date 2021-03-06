'use strict';
const userRoutes = require('../lib/user/routes');
const circuitRoutes = require('../lib/circuits/routes');
const moveRoutes = require('../lib/moves/routes');
const halacious = require('halacious');

module.exports = function registerRoutes (opts) {
    const server = opts.server;

    server.register({ register: halacious, options: { absolute: true }}, function(err){
        if (err) return logger.warn(err);

        var ns = server.plugins.halacious.namespaces.add({ name: 'circuits', description: 'A company for lifters', prefix: 'cc'});
        ns.rel({ name: 'users', description: 'a collection of users' });
        ns.rel({ name: 'user', description: 'a single user' });
        ns.rel({ name: 'circuits', description: 'a collection of circuits' });
        ns.rel({ name: 'circuit', description: 'a single circuit' });
    });

    const routes = [
        // {
        //     path: '/',
        //     method: 'get',
        //     handler: function (req, reply) {
        //         console.log('yuo man');
        //         reply({message: 'Welcome.'});
        //     },
        //     config: {
        //         state: {
        //             parse: false, // parse and store in request.state
        //             failAction: 'ignore' // may also be 'ignore' or 'log'
        //         }
        //     }            
        // }
    ]
    .concat(userRoutes(opts))
    .concat(moveRoutes(opts))
    .concat(circuitRoutes(opts))

    return routes;
}
