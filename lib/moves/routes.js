'use strict';

function circuitRoutes (opts) {
    const movesController = require('./movesController')(opts);

    return [
        {path: '/api/moves', method: 'GET', config: movesController.get}
    ];
}

module.exports =  circuitRoutes;
