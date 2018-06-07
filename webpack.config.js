const path = require('path')

module.exports = {
    entry:'./app.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest']
                    }
                }
            }
        ]
    }
}