'use strict';
const Move = require('./MoveModel');
const MoveDAO = require('./MoveDAO');
const logger = require('../helpers/logger').createLogger(__filename);


class MoveService {

    constructor() {
        this.moveDAO = new MoveDAO();
    }

    createCircuitMove (move, t) {

        const moveModel = new Move(move.title, move.description);
        return this.moveDAO.create(moveModel)
        .then((_move) => {
            logger.info('Move created', _move);
            return _move;
        });
    }

    getAll () {
        return this.moveDAO.getAll();
    }
}

module.exports = MoveService;
