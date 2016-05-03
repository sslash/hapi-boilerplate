'use strict';
const db = require('../helpers/dbHandle');
const sqls = require('./userSQLS');

class UserDAO {
    create (userModel) {

        return db.task(function *(t) {
            let user = yield t.oneOrNone(sqls.GET_BY_EMAIL, userModel.email);
            user = yield user || t.one(sqls.INSERT, [userModel.email, userModel.hash]);

            if (!user.email) {
                user = yield t.one(sqls.GET_BY_ID, user.id);
            }

            return user;
        });
    }

    getAll() {
        return db.any(sqls.GET_ALL);
    }
}

module.exports = UserDAO;
