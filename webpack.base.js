/**
 * Base webpack config with common rules for js files and image files  
 * This file will be merged with server & client webpack config
 *  
 */

module.exports = {
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0',
                    ['env', { targets: { browsers: ['last 2 versions'] } }]
                ],
                plugins: ["transform-class-properties", "babel-plugin-styled-components"]
            }
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            exclude: /node_modules/
        }]
    }
};