'use strict';

class Move {
    constructor(title, description) {
        this._title = title;
        this._description = description;
    }

    get title () {
        return this._title;
    }

    get description () {
        return this._description;
    }
}

module.exports = Move;
