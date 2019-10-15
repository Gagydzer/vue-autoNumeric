/* global module */
const path    = require('path');

const merge   = require('deep-assign');
const webpack = require('webpack');

const options = require('./options');
const base    = require('./webpack.base.js');

const config = merge(base, {
    watch  : true,
    devtool: '#eval-source-map',

    entry: options.paths.resolve('examples-src/index.js'),

    output: {
        filename: 'examples.bundle.js',
        path    : options.paths.output.examples,
    },

    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(options.version),
        }),
    ],

    devServer: {
        contentBase       : path.join(__dirname, '..', 'examples'),//options.paths.output.examples,
        host              : 'localhost',
        historyApiFallback: true,
        port: 8888,
        noInfo            : true,
    },
});

module.exports = config;
