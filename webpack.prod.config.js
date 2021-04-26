const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const { readdirSync } = require('fs')

const getConfigDirectories = source => readdirSync(source, { withFileTypes: false }).map(dirent => dirent)
const ConfigPaths = getConfigDirectories('./Configuration');

const createConfigs = () => {
    const configs = [];
    ConfigPaths.map((config) => {
        configs.push({
            entry: ['babel-polyfill', './src/index.js'],
            output: {
                publicPath: '/',
                filename: `${config}/main-latest.js`
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
                alias: {
                    MapConfig: path.resolve(__dirname, `./Configuration/${config}/`)
                },
                modules: ['node_modules', path.resolve(__dirname, 'src')]
            },
            plugins: [
                new CompressionPlugin({
                    filename: '[path][base]',
                    test: /\.js$/,
                    algorithm: 'gzip',
                    deleteOriginalAssets: true
                }),
                new HtmlWebpackPlugin({
                    inject: false,
                    chunks: [`${config}`],  
                    filename: `${config}/index.html`,
                    template: './index-build.html'
                })
            ]
        })
    })

    return configs;
}

module.exports = (env, argv, t) => createConfigs()