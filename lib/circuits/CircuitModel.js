'use strict';

class Circuit {
    constructor(title, description, moves) {
        this._title = title;
        this._description = description;
        this._moves = moves || [];
        this._circuitMoves = [];
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

    addCircuitMove (circuitMove) {
        this._circuitMoves.push(circuitMove);
    }
    
    toJSON() {
        return {
            title: this._title,
            description: this._description,
            //moves: this._moves,
            circuitMoves: this._circuitMoves
        }
    }
}

module.exports = Circuit;
