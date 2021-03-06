'use strict';
const db = require('../helpers/dbHandle');
const sqls = require('./moveSQLS');
const MoveMapper = require('./MoveMapper');

class MoveDAO {
    create (moveModel) {

        return db.task(function *(t) {
            let move = yield t.oneOrNone(sqls.GET_BY_TITLE, moveModel.title);
            move = yield move || t.one(sqls.INSERT, [moveModel.title, moveModel.description]);

            // didnt exist, get the newly created one
            if (!move.description) {
                move = yield t.one(sqls.GET_BY_ID, move.id);
            }

            return move;
        });
    }

    getAll() {
        return db.any(sqls.GET_ALL)
            .then(moves => MoveMapper.multiMapper(moves));
    }
}

module.exports = MoveDAO;
