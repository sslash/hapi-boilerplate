'use strict';

class Move {
    constructor(title, description, gif, id) {
        this._title = title;
        this._description = description;
        this._gif = gif;
        this._id = id;
    }

    get title () {
        return this._title;
    }

    get id () {
        return this._id;
    }

    get description () {
        return this._description;
    }

    get gif () {
        return this._gif;
    }

    toJSON() {
        return {
            description: this._description,
            title: this._title,
            gif: this._gif,
            id: this._id
        }
    }
}

module.exports = Move;
