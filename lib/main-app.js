'use strict';

var React = require('react'); // React must be in scope when using JSX because JSX is translated into React.createElement(...)
var ReactDOM = require('react-dom');
var CircuitsApp = require('./components/CircuitsApp');

require('./main-app.css');



function mainApp () {
    ReactDOM.render(
        <CircuitsApp />,
        document.getElementById('appContainer')
    );
}



document.addEventListener('DOMContentLoaded', mainApp);