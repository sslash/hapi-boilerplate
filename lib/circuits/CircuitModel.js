'use strict';

class Circuit {
    constructor(title, description, moves) {
        this._title = title;
        this._description = description;
        this._moves = moves || [];
    }

    get title () {
        return this._title;
    }

    get description () {
        return this._description;
    }

    get moves () {
        return this._moves;
    }
}

module.exports = Circuit;
