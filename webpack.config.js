var path = require('path')
module.exports = {
    mode: 'development',
    entry: "./src/index.jsx",
    output: {
        filename: "todoOnReact.js",
        path: path.resolve(__dirname, "./build"),
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js/,
            loader: ['babel-loader'],
            exclude: /node_modules/
        },
        {
            test: /\.css/,
            loader: ['style-loader', 'css-loader']
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: "cheap-hidden-source-map",
    devServer: {
        port: 8080,
        publicPath: "/"
    }
}