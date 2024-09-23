const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const { readdirSync } = require('fs')
const { DefinePlugin } = require('webpack')

const configs = []
const ConfigPaths = readdirSync('./Configuration').map(directory => directory)


// For each sub "map" folder in the configuration folder we are going to create a bundle
// That bundle includes 
// * The main index/APP
// * CSS - the contents of the CSS file are inculded in js file and written into style elements in the head of the page by the js on load
// * Image - required to render the UI are base 64 encoded - references in the CSS seem to be replaced with data:base64 version rather than actual image file references - for images that only includes the leaflet folders mentioned
// * Fonts - these are loaded and included or JS to create references to the fonts
// * the JS file from the configuration folder (excluding nodules) - but resolving and moduile references from the existing node-modules folders
// * This is all packed into a single JS file called main latest and placed in the correct {config}/main-latest.js file
// 
// Javascript files containing all of the above are then encoded as GZIP
// An index page is added to the folder based off the index-build.html file - this not GZIPped


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
                    },
                    {
                        test: /\.(woff(2)?|ttf|eot|svg)$/,
                        use: {
                          loader: 'file-loader',
                          options: {
                            name: 'static/fonts/[name].[hash].[ext]',
                          },
                        },
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
                }),
                new DefinePlugin({
                    'LOCAL_BASEMAP_AUTH_TOKEN': null
                }),
            ]
        })
    })

    return configs
}

module.exports = (env, argv, t) => createConfigs()