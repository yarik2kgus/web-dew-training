const path = require('path'); 

module.exports = {  
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist/assets'), 
        filename: 'bundle.js' 
    },
    module: { 
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] 
                    }
                }
            },
            {
                test: /\.css$/, // Собирает все CSS стили и вгружает в основной файл, но он должне быть ипортриован в index.js потому что вебпак рассматривате его как "точка входа" и там же ищет ВСЕ зависимости
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: { 
        static: {
            directory: path.resolve(__dirname, "dist"), 
        },
        devMiddleware: {
            publicPath: '/assets/', 
        }
    },
};
