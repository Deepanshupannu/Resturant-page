const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Resturant page',
            template: 'src/index.html'
        }),

    ],

    module: {
        rules: [

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader',
                ],
            },

        ],


    },
}