module.exports = {
    entry: {
        javascript: "./app/js/app.js",
        html: "./app/index.html"
    },
    output: {
        path: __dirname + "/dist",
        filename: "./js/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {test: /\.js$/, exclude: /node_modules/, loader: "babel" },
            {test: /\.jsx$/, exclude: /node_modules/, loader: "babel" }
        ]
    }
};