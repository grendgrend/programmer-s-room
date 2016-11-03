const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './client/index.jsx',

    output: {
        path: './public',
        filename: 'app.js'
    },

    watch : true,

    watchOptions : {
        aggregateTimeout : 100
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module : {
        loaders: [{
            test : /\.jsx$/,
            loader : 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
            'style-loader',
                'css-loader!postcss-loader')
        }
        ]
    },

    postcss: function () {
        return [
            require('postcss-modules')({ scopeBehaviour: 'global' }),
            require('postcss-cssnext')({ browsers: ['last 3 versions'] }),
            require('postcss-font-magician')(),
            require('postcss-mixins')(),
            require('postcss-advanced-variables')(),
            require('postcss-nested')()
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};