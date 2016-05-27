'use strict';

class Move {
    constructor(title, description, gif) {
        this._title = title;
        this._description = description;
        this._gif = gif;
    }

    get title () {
        return this._title;
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
            gif: this._gif
        }
    }
}

module.exports = Move;
