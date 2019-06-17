const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const indexPlugin = new HtmlWebpackPlugin({
    template: './index.html'
})

module.exports = (args) => {
    return {
        // the main entry point of the app
        entry: ['./src/index.tsx'],
        // output a bundle to the specific folder
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'candyfox.js'
        },
        module: {
            rules: [
                // load typescript
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                },
                // load js source map
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader'
                },
                // load ts / tsx source map
                {
                    enforce: 'pre',
                    test: /\.tsx?$/,
                    use: 'source-map-loader'
                },
                // load css styles
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' }
                    ]
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist')
        },
        // attach different plugins
        plugins: [
            indexPlugin
        ],
        resolve: {
            modules: [
                path.resolve('./'),
                path.resolve('./node_modules')
            ],
            // resolve source-code imports with extensions
            extensions: ['.js', '.ts', '.tsx']
        }
    }
}
