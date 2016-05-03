'use strict';

function circuitRoutes (opts) {
    const circuitController = require('./circuitController')(opts);

    return [
        {path: '/api/circuits', method: 'POST', config: circuitController.post},
        {path: '/api/circuits', method: 'GET', config: circuitController.get}
    ];
}

module.exports =  circuitRoutes;
