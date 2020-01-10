/**
 * Webpack config for client
 * entry point file is src/client/index.js and compiled output will be in public/bundle.js
 *  
 */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const CopyPlugin = require('copy-webpack-plugin');

const clientConfig = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins:[
        new CopyPlugin([
            {from:'src/assets/data'} 
        ])
    ]
};

module.exports = merge(baseConfig, clientConfig);