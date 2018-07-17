const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'), 
    entry:'src/app.js',
    output: {
        filename: 'webpack.js', // ???
        path: path.resolve(__dirname, '/build') // ? slash?
    },
    devServer: {
        // contentBase: path.resolve(__dirname, "./dist/assets/media"),
        // compress: true,
        port: 3000,
        stats: 'errors-only',
        open: true
      },

    plugins: [
        new CleanWebpackPlugin(['webpack'])
    ],

    devtool: 'inline-source-map',

    module: {
        rules: [
            { test: /\.html$/, use: ['html-loader'] },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
            //   cacheDirectory: true,
            //   plugins: [
            //     'transform-strict-mode',
            //     'transform-object-rest-spread',
            //     'transform-class-properties'
            //   ],
                    },
                }
            }
        ]
    }
}