'use strict';

class Circuit {
    constructor(title, description, tags, moves) {
        this._title = title;
        this._description = description;
        this._moves = moves || [];
        this._circuitMoves = [];
        this._tags = tags || [];
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

    get circuitMoves () {
        return this._circuitMoves;
    }

    get tags () {
        return this._tags;
    }

    addCircuitMove (circuitMove) {
        this._circuitMoves.push(circuitMove);
    }

    toJSON() {
        return {
            title: this._title,
            description: this._description,
            tags: this._tags,
            circuitMoves: this._circuitMoves
        }
    }
}

module.exports = Circuit;
