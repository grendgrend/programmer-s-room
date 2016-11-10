const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './client/index.jsx',

    output: {
        path: './server/public',
        filename: 'app.js'
    },

    watch : true,

    watchOptions : {
        aggregateTimeout : 100
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    devtool : 'eval',

    module : {
        loaders: [{
            test : /\.jsx$/,
            loader : 'babel-loader'
        }, {
            test : /\.js$/,
            loader : 'babel-loader'
        },
            {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract( 'style-loader',  'css-loader?modules=true!postcss-loader')
        }
        ]
    },

    postcss: function () {
        return [
            require('postcss-import')(),
            require('postcss-advanced-variables')(),
            require('postcss-cssnext')({ browsers: ['last 3 versions'] }),
            require('postcss-font-magician')(),
            require('postcss-mixins')(),
            require('postcss-nested')()
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            //Mapper:
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("app.css")
        /*new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: "./" }
        })*/
    ]
};