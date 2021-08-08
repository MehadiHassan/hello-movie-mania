import path = require('path');
import webpack = require('webpack');
import dotenv = require('dotenv');
import fs = require('fs'); // to check if the file exists
import HtmlWebpackPlugin = require('html-webpack-plugin');
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin = require('copy-webpack-plugin');
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import ESLintPlugin from 'eslint-webpack-plugin';

// call dotenv and it will return an Object with a parsed key
// Get the root path (assuming your webpack config is in the root of your project!)
const currentPath = path.join(__dirname);

// Create the fallback path (the production .env)
const basePath = currentPath + '/.env';

// We're concatenating the environment name to our filename to specify the correct env file!
const envPath = basePath + '.' + process.env.ENVIRONMENT;

// Check if the file exists, otherwise throw error
if (!fs.existsSync(envPath)) {
    console.log(`${envPath} file not found`);
    process.exit(1);
}

// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: envPath }).parsed;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const emptyObject: any = {};

// reduce it to a nice object, the same as before (but with the variables from the file)
let envKeys;
if (fileEnv !== undefined) {
    envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        prev[`process.env.${next}`] = JSON.stringify(fileEnv![next]);
        return prev;
    }, emptyObject);
}

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        pathinfo: false, // Remove Gurbage collection pressure on project
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new HtmlWebpackPlugin({
            //re-generates the new index.html and replaces the old one in the bundle.
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new CleanWebpackPlugin(), // Delete bundle which is generated in the output directory
        new CopyWebpackPlugin({
            patterns: [{ from: './public/*', to: '.' }],
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                ENABLE_DEVTOOLS: JSON.stringify(!!process.env.ENABLE_DEVTOOLS),
            },
        }),
        //Discovers all modules from the previous compilation upfront while watching for changes, trying to improve the incremental build times
        new webpack.AutomaticPrefetchPlugin(),
        new ESLintPlugin({
            eslintPath: require.resolve('eslint'),
            files: './src/**/*.{ts,tsx,js,jsx}',
            extensions: ['tsx, jsx, js, ts'],
            fix: true,
            emitError: true,
            failOnError: true, // Build failed if any error
            failOnWarning: true, // Build Failed If any warning})
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    debug: true,
                                    useBuiltIns: 'usage',
                                    corejs: { version: '3.8', proposals: true },
                                },
                            ],
                            '@babel/preset-react',
                        ],
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // disable type checker - we will use it in fork plugin
                        transpileOnly: true,
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom', // Dependecny for Hot Reloading with react-hot-reloader
        },
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
    },
};
