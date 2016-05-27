'use strict';
const db = require('../helpers/dbHandle');
const sqls = require('./circuitSQLS');
const CircuitMapper = require('./CircuitMapper');

const ALL_TAGS = 'all';

class CircuitDAO {
    create (circuitModel) {

        return db.task(function *(t) {
            let circuit = yield t.oneOrNone(sqls.GET_BY_TITLE, circuitModel.title);
            circuit = yield circuit || t.one(sqls.INSERT, [circuitModel.title, circuitModel.description]);

            // didnt exist, get the newly created one
            if (!circuit.description) {
                circuit = yield t.one(sqls.GET_STRIPPED_BY_ID, circuit.id);
            }

            return circuit;
        });
    }

    getAll(start, limit, query) {
        if (query && query !== ALL_TAGS) {
            return db.any(sqls.QUERY_BY_TAGS, [`%${query}%`])
                .then(circuits => CircuitMapper.multiMapper(circuits));
        } else {
            return db.any(sqls.GET_ALL)
                .then(circuits => CircuitMapper.multiMapper(circuits));
        }
    }

    getTags () {
        return db.any(sqls.GET_TAGS)
            .then(tags => CircuitMapper.mapTags(tags));
    }

    getById(id) {
        // TODO: populate
        return db.one(sqls.GET_BY_ID, [id])
            .then(circuit => CircuitMapper.rowMapper(circuit));
    }

    createCircuitMove (circuitMove, t) {
        return t.any(sqls.INSERT_CIRCUIT_MOVE,
                [circuitMove.circuitId, circuitMove.move.id, circuitMove.circuitMoveDescription]);
    }
}

module.exports = CircuitDAO;
