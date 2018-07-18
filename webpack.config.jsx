const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        filename: 'calculator.jsx',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 3000,
        stats: 'errors-only',
        open: true
      },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.html$/, 
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                exclude: /node_modules/,
                test: /\.jsx$/,
                use: [
                    {   
                        loader: 'babel-loader',
                        options: {
                        presets: ["env", "react"] // this transpiles js & React/jsx
                    },
                }
                ]
            }
        ]
    }
}