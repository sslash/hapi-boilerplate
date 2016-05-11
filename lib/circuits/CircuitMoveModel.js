'use strict';

class CircuitMove {
    constructor(circuitId, move, circuitMoveDescription) {
        this._circuitId = circuitId;
        this._move = move;
        this._circuitMoveDescription = circuitMoveDescription;
    }

    get circuitId () {
        return this._circuitId;
    }

    get move () {
        return this._move;
    }

    get circuitMoveDescription () {
        return this._circuitMoveDescription;
    }
    
    toJSON() {
        return {
            circuitId: this._circuitId,
            move: this._move,
            circuitMoveDescription: this._circuitMoveDescription
        }
    }
}

module.exports = CircuitMove;
