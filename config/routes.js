'use strict';
const userRoutes = require('../lib/user/routes');
const halacious = require('halacious');

module.exports = function routes (opts) {
    const server = opts.server;

    server.register({ register: halacious, options: { absolute: true }}, function(err){
        if (err) return logger.warn(err);

        var ns = server.plugins.halacious.namespaces.add({ name: 'circuits', description: 'A company for lifters', prefix: 'cc'});
        ns.rel({ name: 'users', description: 'a collection of users' });
        ns.rel({ name: 'user', description: 'a single user' });
    });

    const routes = [
        {
            path: '/',
            method: 'get',
            handler: function (req, reply) {
                reply({message: 'Welcome.'});
            }
        }
    ]
    .concat(userRoutes(opts));

    return routes;
}
