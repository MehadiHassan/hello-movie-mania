import merge from 'webpack-merge';
import WorkboxPlugin = require('workbox-webpack-plugin');
import commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    output: {
        filename: '[name].js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
        disableHostCheck: true, // Bypass host checking
        compress: true, // Save bandwidth and speedup site
        contentBase: './bundle',
        watchContentBase: true,
        historyApiFallback: true,
        hot: true, // Enable HMR
        open: true, // Open the default browser when server is started
        openPage: 'http://localhost:3000',
        inline: true,
        host: '0.0.0.0',
        public: '0.0.0.0:3000',
        port: 3000,
        transportMode: 'ws', // Use 'ws' instead of 'sockjs-node' on server
        writeToDisk: true, // Tells dev server to write generated assets to the disk
        watchOptions: {
            ignored: /node_modules/,
            poll: true, // Or you can set a value in milliseconds.
        },
    },
    plugins: [
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/sw-base.ts',
            swDest: 'sw.js',
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
        rules: [
            {
                test: /\.s[ac]ss|css$/i,
                use: [
                    'style-loader',
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
                test: /\.(png|svg|jpe?g|gif|ico|woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
});
