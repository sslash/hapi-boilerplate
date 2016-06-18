'use strict';

if (process.env.NODE_ENV !== 'development') {
    throw new Error('ERROR: Webpack dev server only works in dev environment');
}

var chalk = require('chalk');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config = require('./config/variables');
var webpackConfig = require('./config/webpack-config');


var app = express();
var compiler = webpack(webpackConfig);


app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.listen(config.webpack.port, config.server.host, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(chalk.green('Webpack dev server listening at ' + config.webpack.devServerUrl));
});