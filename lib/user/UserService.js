'use strict';
const createPasswordSalt = require('./createPasswordSalt');
const User = require('./UserModel');
const UserDAO = require('./UserDAO');
const logger = require('../helpers/logger').createLogger(__filename);


class UserService {

    constructor() {
        this.userDAO = new UserDAO();
    }

    create (email, password) {

        return createPasswordSalt(password)
        .then((hash) => {
            const user = new User(email, hash);
            return this.userDAO.create(user);
        })
        .then((user) => {
            logger.info('User created', user);
            return user;
        });
    }

    getAll () {
        return this.userDAO.getAll();
    }
}

module.exports = UserService;
