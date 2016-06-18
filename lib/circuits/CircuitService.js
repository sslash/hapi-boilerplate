'use strict';
const Circuit = require('./CircuitModel');
const CircuitDAO = require('./CircuitDAO');
const MoveService = require('../moves/MoveService');
const CircuitMove = require('./CircuitMoveModel');
const logger = require('../helpers/logger').createLogger(__filename);
const db = require('../helpers/dbHandle');


class CircuitService {

    constructor() {
        this.circuitDAO = new CircuitDAO();
        this.createCircuitMove = this.createCircuitMove.bind(this);
        this.moveService = new MoveService();
    }

    /**
     *
     * @param string title circuit title
     * @param string description circuit title
     * @param array moves [
     * {
     *     title: string
     *     description: string
     *     circuitMoveDescription: string
     * }
     * ]
     *
     */
    create (title, tags, moves) {

        return new Promise((resolve, reject) => {

            const circuitModel = new Circuit(title, null, tags);

            db.tx(t => {
                // create a circuit
                return this.circuitDAO.create(circuitModel, t)
                .then(circuit => {
                    logger.debug('Created circuit: ', circuit);

                    // create moves
                    return Promise.all( moves.map(move => this.createCircuitMove(circuit, move, t)))
                    .then(() => { return circuit; });
                })
                .then((circuit) => {

                    // fetch the latest populated circuit
                    // return this.circuitDAO.getById(circuit.id);
                    return circuit;
                });
            })
            .then(function (circuit) {
                logger.info('Circuit created', circuit);
                resolve(circuit);
            })
            .catch(function (error) {
                logger.info('Failed to create circuit', error);
                reject(error);
            });
        });
    }

    getTags () {
        return this.circuitDAO.getTags();
    }

    createCircuitMove (circuit, move, t) {
        logger.info('Creating circuit move: ', circuit, move);

        let promise;
        if (move.id) {
            promise = Promise.resolve(move);

        // create the move also
        } else {
            promise = this.moveService.createMove(move, t) 
        }

        promise.then(_move => {
            const circuitMove = new CircuitMove(circuit.id, _move, move.circuitMoveDescription);
            return this.circuitDAO.createCircuitMove(circuitMove, t);
        });
    }

    getAll (start, limit, query) {
        return this.circuitDAO.getAll(start,limit,query);
    }
}

module.exports = CircuitService;
