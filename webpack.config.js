const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const { readdirSync } = require('fs')

const getConfigDirectories = source => readdirSync(source, { withFileTypes: false }).map(dirent => dirent)

const ConfigPaths = getConfigDirectories('./Configuration');
const MapConfigs = {}
ConfigPaths.map(config => MapConfigs[`${config}`] = `./Configuration/${config}/index.js`)

const MapWebpackHtmlPlugin = () => {
    return ConfigPaths.map((entry) => new HtmlWebpackPlugin({
        inject: false,
        chunks: [`${entry}`],
        filename: `${entry}/index.html`,
        template: './index.html'
    }));
}

let config = {
    entry: MapConfigs,
    output: {
        publicPath: '/',
        filename: '[name]/main-latest.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: true
                    }
                }],
                include: [
                    path.resolve(__dirname, 'node_modules/leaflet-fullscreen/dist'),
                    path.resolve(__dirname, 'node_modules/leaflet-search/images'),
                    path.resolve(__dirname, 'node_modules/leaflet/dist/images')
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/i,
                use: ['url-loader'],
                include: [
                    path.resolve(__dirname, 'node_modules/font-awesome/fonts')
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            test: /\.js$|\.css$|\.html$/,
            algorithm: 'gzip',
            deleteOriginalAssets: false
        })
    ]
}

module.exports = (env, argv) => {
    config.plugins = config.plugins.concat(MapWebpackHtmlPlugin())

    if (argv.mode === 'development') {
        config.devtool = 'source-map'
        config.devServer = {
            inline: true,
            historyApiFallback: true,
            sockPort: 8080
        }
    }

    return config
}