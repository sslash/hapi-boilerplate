'use strict';

if (process.env.NODE_ENV !== 'development') {
    throw new Error('ERROR: Sandbox is only intended for dev environment');
}

var React = require('react'); // React must be in scope when using JSX because JSX is translated into React.createElement(...)
var ReactDOM = require('react-dom');
var CircuitsApp = require('./components/CircuitsApp');

require('./main-sandbox.css');

function mainSandbox () {
    ReactDOM.render(
        <CircuitsApp />,
        document.getElementById('appContainer')
    );
}

document.addEventListener('DOMContentLoaded', mainSandbox);