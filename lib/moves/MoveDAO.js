'use strict';
const db = require('../helpers/dbHandle');
const sqls = require('./circuitSQLS');
const CircuitMapper = require('./CircuitMapper');

class MoveDAO {
    create (moveModel) {

        return db.task(function *(t) {
            let circuit = yield t.oneOrNone(sqls.GET_BY_TITLE, circuitModel.title);
            circuit = yield circuit || t.one(sqls.INSERT, [circuitModel.title, circuitModel.description]);

            // didnt exist, get the newly created one
            if (!circuit.description) {
                circuit = yield t.one(sqls.GET_BY_ID, circuit.id);
            }

            return CircuitMapper.rowMapper(circuit);
        });
    }
}

module.exports = MoveDAO;
