const path = require('path');
const webpack = require('webpack');

module.exports = {
    //context: path.resolve(__dirname, 'src'), 
    entry: path.resolve(__dirname, 'src', 'app.jsx'),
    output: {
        filename: 'calculator.jsx', // ???
        path: path.resolve(__dirname, 'build') // ? slash?
    },
    devServer: {
        // contentBase: path.resolve(__dirname, "./dist/assets/media"),
        // compress: true,
        port: 3000,
        stats: 'errors-only',
        open: true
      },

    // plugins: [
    //     new CleanWebpackPlugin(['webpack'])
    // ],

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.html$/, 
                // use: ['html-loader'] 
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