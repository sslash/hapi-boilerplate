'use strict';
import React from 'react';
import req from 'axios';
import CircuitsCreator from './CircuitsCreator';
import './normalize.css';
import './skeleton.css';
import './circuitsApp.css';

/**
 * @class Counter
 * @extends ReactComponent
 */
class CircuitsApp extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            circuits: [],
            moves: []
        };
    }

    componentDidMount () {
        this.fetchMoves();
        this.fetchCircuits();
    }

    fetchMoves () {
        req
            .get('/api/moves')
            .then((result) => {
                this.setState({moves: result.data})
            });
    }

    fetchCircuits () {
        req
            .get('/api/circuits')
            .then((result) => {
                console.log('res', result);
                this.setState({
                    circuits: result.data._embedded['cc:circuit']
                })
            });
    }

    saveCircuit = (data) => {
        req.post('/api/circuits', data)
        .then(() => {
            console.log('Will refresh..');
            window.href = '/';
        })
        .catch((err) => {
            alert('Something went wrong', err);
        })
    }

    render () {
        return (
            <div className="container">
                <CircuitsCreator 
                    moves={this.state.moves}
                    circuits={this.state.circuits}
                    saveCircuit={this.saveCircuit}
                />
            </div>
        );
    }
}

module.exports = CircuitsApp;