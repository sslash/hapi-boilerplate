'use strict';
const Circuit = require('./CircuitModel');
const CircuitDAO = require('./CircuitDAO');
const logger = require('../helpers/logger').createLogger(__filename);
const db = require('../helpers/dbHandle');


class CircuitService {

    constructor() {
        this.circuitDAO = new CircuitDAO();
    }

    create (title, description, moves) {

        return new Promise((resolve, reject) => {

            const circuitModel = new Circuit(title, description);
            const circuitDAO = this.circuitDAO;
            const createCircuitMove = this.createCircuitMove;

            db.tx(t => {
                return this.circuitDAO.create(circuitModel, t)
                    .then(circuit => {
                        return Promise.all( moves.map(move => this.createCircuitMove(circuit, move, t))) })
                    .then((circuit) => {
                        // just fetch the latest version of the model
                        return circuitDAO.getCircuitById(circuit.id);
                    });
                ]);
            })
            .then(function (circuit) {
                logger.info('Circuit created', circuit);
                resolve(circuit);
            })
            .catch(function (error) {
                logger.info('Failed to create circuit', err);
                reject(err);
            });
        });
    }

    createCircuitMove (circuit, move, t) {
        return this.moveService.createMove(move, t)

        // TODO: continue by creating this one!
            .then(_move => this.circuitDAO.createCircuitMove(circuit, _move, t));
    }

    getAll () {
        return this.circuitDAO.getAll();
    }
}

module.exports = CircuitService;
