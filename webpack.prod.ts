import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import WorkboxPlugin = require('workbox-webpack-plugin');
import commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    output: {
        filename: '[name].[contenthash].js', // Implement Cache Busting
    },
    mode: 'production',
    target: 'browserslist',
    optimization: {
        moduleIds: 'deterministic', // Module names are hashed into small numeric values.
        runtimeChunk: 'single', // Split runtime code into seprate chunks
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                // Extract third-party library to sperate chunks, as they are less likely to change
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: 1,
                },
            },
        },
        nodeEnv: 'production',
        minimize: true,
        minimizer: [
            /** Minified CSS */
            new CssMinimizerPlugin({
                test: /\.s[ac]ss|css$/i,
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
                include: /\/includes/,
                exclude: /\/excludes/,
            }),
            /** Minified js */
            new TerserPlugin({
                test: /\.(js|jsx|ts|tsx)(\?.*)?$/i,
                parallel: true,
                terserOptions: {
                    mangle: true,
                    ie8: true,
                    safari10: true,
                    keep_classnames: true,
                    keep_fnames: true,
                    compress: {
                        drop_console: true,
                    },
                    sourceMap: true, // Must be set to true if using source-maps in production
                },
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // On-Demand-Loading of CSS and SourceMap
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[chunkhash].css',
        }),
        //Workbox should always be the last plugin you call.
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/sw-base.ts',
            swDest: 'sw.js',
            mode: 'production', //optimized service worker bundle that excludes debugging info will be produced
            include: [
                /^(main\.)\w*(\.js)$/,
                /^src\/static\/.*(?:png|jpg|jpeg|svg|ico|json|css)$/,
                /^assets\/icons\/.*(?:png|jpg|jpeg|svg|ico|json|css)$/,
                /^public\/.*(?:png|jpg|jpeg|svg|ico|json|css)$/,
                'index.html',
                'manifest.json',
            ],
            maximumFileSizeToCacheInBytes: 3670016, //main.js take around 3mb
        }),
    ],
    module: {
        /** Asset Optimization Start */
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss|css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[contenthash].[ext]',
                },
            },
        ],
        /** Assset Optimization End */
    },
    performance: {
        // Help prevent deploying production bundle that are too large,
        hints: 'error',
        maxEntrypointSize: 2400000, // App entry point file size limit should be max 1MB
        maxAssetSize: 2400000, // max allowed asset size 900KiB
    },
});
