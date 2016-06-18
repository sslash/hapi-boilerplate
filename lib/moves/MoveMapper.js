'use strict';
const Move = require('../moves/MoveModel');

class MoveMapper {

    static multiMapper(rows) {

        return rows.map(move => {
            return new Move(move.title, move.description, move.gif, move.id);
        });
    }
}

module.exports = MoveMapper;
