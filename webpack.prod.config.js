const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const { readdirSync } = require('fs')

const configs = [];
const ConfigPaths = readdirSync('./Configuration').map(directory => directory)

const createConfigs = () => {
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
                        test: /\.js|ts$/,
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
                new CleanWebpackPlugin(),
                new CompressionPlugin({
                    filename: '[path]',
                    test: /\.js$/,
                    algorithm: 'gzip',
                    deleteOriginalAssets: false
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