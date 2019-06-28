const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = process.env["NODE_ENV"] || "development";

module.exports = {
    mode: env,
    entry: './src/index.tsx',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //favicon: "src/assets/images/favicon.ico",
            inject: "body",
            template: "./public/index.html"
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: "./public",
        hot: true,
    }
};
