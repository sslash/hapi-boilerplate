'use strict';
import React from 'react';
import req from 'axios';

const NULL_VALUE = ' - ';
const NULL_VALUE_SELECT = '-';
class AddMove extends React.Component {

    onChange = (e) => {
        this.changeMove(e.currentTarget.value);
    }

    onBlur = () => {
        this.changeMove(this.select.value);
    }

    changeMove = (moveId) => {

        // if we are resetting
        if (moveId == NULL_VALUE_SELECT) {
            moveId = null;
        }
        this.props.onChange(moveId, this.description.value);
    }

    render() {
        const {moves, selected} = this.props;

        return (
            <div className="row">
                <div className="six columns">
                    <label htmlFor="exampleRecipientInput">Move</label>
                    <select 
                        className="u-full-width" 
                        onChange={this.onChange}
                        ref={ref => this.select = ref}>
                        {moves.map((move, i) => (
                            <option
                                value={move.id}
                                key={`move.${i}`}
                                >{move.title}</option>
                        )) }
                    </select>
                </div>
                <div className="six columns">
                    <label htmlFor="exampleEmailInput">Move description</label>
                    <input 
                        ref={ref => {this.description = ref}}
                        className="u-full-width" 
                        type="text" 
                        placeholder="Move description" 
                        onBlur={this.onBlur}
                    />
                </div>
            </div>
        );
    }
}

/**
 * @class Counter
 * @extends ReactComponent
 */
class CircuitsCreator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            addMoves: [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ]
        };
    }

    onAddMove = (index, moveId, moveDescription) => {
        console.log('sappern', index, moveId, moveDescription);

        const addMoves = Object.assign([], this.state.addMoves);
        addMoves[index].id = moveId;
        addMoves[index].circuitMoveDescription = moveDescription;
        this.setState({ addMoves });
    }

    onSave = () => {
        this.props.saveCircuit({
            title: this.title.value,
            tags: (this.tags.value || '').split(',').map(t => t.trim()),
            moves: this.state
                .addMoves
                .filter(m => m.id >= 0)
                .map(m => (
                    {
                        id: m.id, 
                        circuitMoveDescription: m.circuitMoveDescription
                    }
                ))
        });
    }

    render() {

        const moves = [{ title: NULL_VALUE }].concat(this.props.moves);

        return (
            <div>
                <div>
                    <input 
                        type="text" 
                        className="u-full-width" 
                        placeholder="Circuit Title"
                        ref={ref => this.title = ref} 
                    />
                    <input 
                        type="text" 
                        className="u-full-width" 
                        placeholder="Circuit Tags (comma separated)"
                        ref={ref => this.tags = ref} 
                    />
                    <button className="button-primary" onClick={this.onSave}>Save Circuit</button>

                    <div>
                        {this.state.addMoves.map((addMove, i) => (
                            <AddMove
                                moves={moves}
                                onChange={this.onAddMove.bind(this, i) }
                                selected={addMove.selectedTitle}
                                />
                        )) }
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = CircuitsCreator;