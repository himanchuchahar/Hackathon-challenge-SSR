/**
 * Webpack config for server
 * entry point file is src/index.js and compiled output will be in bundle/build.js
 *  
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);