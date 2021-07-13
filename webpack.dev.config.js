const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const solution = 'libraries'

module.exports = (env, argv, t) => (
    {
        entry: ['babel-polyfill', './src/index.js'],
        output: {
            filename: '[name]-latest.js',
            publicPath: '/'
        },
        devtool: 'source-map',
        devServer: {
            inline: true,
            historyApiFallback: true,
            port: 8080
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
                MapConfig: path.resolve(__dirname, `./Configuration/${solution}/`)
            },
            modules: ['node_modules', path.resolve(__dirname, 'src')]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ]
    }
)