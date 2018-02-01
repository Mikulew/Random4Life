const path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules)/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                },
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ],
            }
        ]
    }
};