/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
    return {
        // the main entry point of the app
        entry: ['./src/index.tsx'],
        // output a bundle to the specific folder
        output: {
            //path: path.resolve(dirname, './public'),
            filename: 'candyfox.js'
        },
        module: {
            rules: [
                // load typescript
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                // load css | sass | scss
                {
                    test: /\.(sa|sc|c)ss$/,
                    loader: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: 'build',
            port: 8080
        },
        resolve: {
            modules: ['node_modules'],
            // resolve source-code imports with extensions for TypeScript
            extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss']
        },
        // attach different plugins
        plugins: [
            new HtmlWebpackPlugin({
                title: 'CandyFox - Beautiful Bakery.',
                template: './src/index.html'
                // favicon: './src/assets/images/favicon.ico',
            })
        ]
    }
}
