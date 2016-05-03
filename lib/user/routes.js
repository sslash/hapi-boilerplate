'use strict';

function userRoutes (opts) {
    const userController = require('./userController')(opts);

    return [
        {path: '/api/users', method: 'POST', config: userController.post},
        {path: '/api/users', method: 'GET', config: userController.get}
    ];
}

module.exports =  userRoutes;
