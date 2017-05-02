var path = require('path');

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        path:  path.join(__dirname, 'dist'),
        filename: "./scripts/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(ttf|eot|woff|woff2|svg)$/, loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                }
            }
        ]
    }
};
