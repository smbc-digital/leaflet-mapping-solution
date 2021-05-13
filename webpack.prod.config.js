const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require("zlib")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const { readdirSync, renameSync } = require('fs')

const configs = [];
const ConfigPaths = readdirSync('./Configuration').map(directory => directory)

const pluginName = 'RenameFilePlugin';
class RenameFilePlugin {
  constructor(options = {}) {
    this.options = { ...options }
   }

  apply(compiler) {
    compiler.hooks.done.tap(pluginName, () => {
      renameSync(this.options.startFile, this.options.renameTo)
    })
  }
}

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
                    filename: `${config}/[name].br`,
                    test: /\.js$/,
                    algorithm: "brotliCompress",
                    compressionOptions: {
                      params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                      },
                    }
                }),
                new RenameFilePlugin({
                  startFile:`dist/${config}/main-latest.br`,
                  renameTo:`dist/${config}/main-latest.js`
                }),
                new CompressionPlugin({
                  filename: `${config}/[name].gz`,
                  test: /\.js$/,
                  algorithm: "gzip",
                  deleteOriginalAssets: true
                }),
                new RenameFilePlugin({
                  startFile:`dist/${config}/main-latest.gz`,
                  renameTo:`dist/${config}/fallback.js`
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