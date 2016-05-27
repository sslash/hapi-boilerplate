'use strict';
const _ = require('lodash');
const Move = require('../moves/MoveModel');
const CircuitMove = require('./CircuitMoveModel');
const Circuit = require('./CircuitModel');

class CircuitMapper {

    static rowMapper (user) {
        return user;
    }

    static multiMapper (rows) {

        const circuits = _.reduce(rows, (result, current) => {

            const move = new Move(current.m_title, current.m_description, current.m_gif);
            const circuitMove = new CircuitMove(current.c_id, move, current.cm_description);
            const circuit = result[current.c_id] ||
                new Circuit(current.c_title, current.c_description, current.c_tags);
            circuit.addCircuitMove(circuitMove);

            result[current.c_id] = circuit;
            return result;
        }, {});

        return _.values(circuits);
    }

    static mapTags (rows) {
        const tagsArray = [];

        rows.forEach(row => {
            row.tags.split(',').forEach((tag) => {
                if (tagsArray.indexOf(tag) === -1) {
                    tagsArray.push(tag);
                }
            });
        });

        return tagsArray;
    }
}

module.exports = CircuitMapper;
