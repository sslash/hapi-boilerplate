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
    
    toJSON() {
        return {
            description: this._description,
            title: this._title
        }
    }
}

module.exports = Move;
