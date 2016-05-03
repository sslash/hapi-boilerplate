'use strict';

class User {
    constructor(email, hash) {
        this._email = email;
        this._hash = hash;
    }

    get email () {
        return this._email;
    }

    get hash () {
        return this._hash;
    }
}

module.exports = User;
