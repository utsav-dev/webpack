var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // in order to write a file, absolute path is req, therefore path module is being used here.
        filename: 'bundle.js', // common conventional name
        publicPath: '/dist' // if its missing then, webpack-dev-server wont understand properly the path, as we have splitted the path in 2 properties and it will only pick up the filename.
    },
    module: {    // module is used to transform the file, which has imports in it. for example in the app.js file we have css files imports, module will help the webpack to know that we have imports to handle & also this will add it directly to the inde.html file for us[NOT adding css to js]
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // ...
        })
    ]
};
