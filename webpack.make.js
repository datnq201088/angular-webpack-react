'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig(options) {
    /**
     * Environment type
     * BUILD is for generating minified builds
     */
    var BUILD = !!options.BUILD;

    /**
     * Config
     */
    var config = {};

    /**
     * Entry
     * Should be an empty object if it's generating a test build
     * Karma will set this when it's a test build
     */

    config.entry = {
        app: ['./src/app.js']
    }

    /**
     * Output
     */

    config.output = {
        // Absolute output directory
        path: __dirname + '/dist',

        // Output path from the view of the page
        // Uses webpack-dev-server in development
        publicPath: BUILD ? '/' : 'http://localhost:8080/',

        // Filename for entry points
        // Only adds hash in build mode
        filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',

        // Filename for non-entry points
        // Only adds hash in build mode
        chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
    }

    /**
     * Devtool
     * Type of sourcemap to use per build type
     */
    if (BUILD) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval';
    }

    /**
     * Loaders
     * This handles most of the magic responsible for converting modules
     */

    // Initialize module
    config.module = {
        preLoaders: [],
        loaders: [{
            // JS LOADER
            // Transpile .js files using babel-loader
            test: /\.js$/,
            loader: 'babel?optional[]=runtime',
            exclude: /node_modules/
        },
        {
            // ASSET LOADER
            // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
            // Rename the file using the asset hash
            // Pass along the updated reference to your code
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            // HTML LOADER
            test: /\.html$/,
            loader: 'raw'
        },
        {
            // JSON LOADER
            test: /\.json$/,
            loader: 'json'
        }
        ]
    };

    // CSS LOADER
    // Postprocess your css with PostCSS plugins
    var cssLoader = {
        test: /\.css$/,
        // Extract css files in production builds
        // Use style-loader in development for hot-loading
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
    };

    // Add cssLoader to the loader list
    config.module.loaders.push(cssLoader);

    /**
     * PostCSS
     * Add vendor prefixes to your css
     */
    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    /**
     * Plugins
     */
    config.plugins = [
        // Extract css files
        // Disabled when not in build mode
        new ExtractTextPlugin('[name].[hash].css', {
            disable: !BUILD
        })

    ];

    // Render index.html

    config.plugins.push(
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            minify: BUILD
        })
    );

    // Add build specific plugins
    if (BUILD) {
        config.plugins.push(
            // Only emit files when there are no errors
            new webpack.NoErrorsPlugin(),

            // Dedupe modules in the output
            new webpack.optimize.DedupePlugin(),

            // Minify all javascript, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin()
        )
    }

    // Dev server configuration
    config.devServer = {
        hot: true,
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    };

    return config;
};
