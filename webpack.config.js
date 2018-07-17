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
      }
    module: {
        rules: [
        //   {
        //     test: /\.html$/,
        //     use: [
        //       {
        //         loader: 'html-loader',
        //         options: {minimize: true}
        //       }
        //     ]
        //   },
          {
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                ['env'],
                'react'
              ]
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