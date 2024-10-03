const path = require('path'); // Импорт модуля path из Node.js

module.exports = {
    entry: './src/index.js', // Точка входа для сборки
    output: {
        path: path.resolve(__dirname, 'dist/assets'), // Путь сохранения итогового файла
        filename: 'bundle.js' // Имя итогового файла
    },
    module: { // Устанавливаем какие лоадеры будут запущены
        rules: [{
            test: /\.js$/, // Регулярное выражение для поиска js файлов
            exclude: /node_modules/, // Исключаем папку node_modules
            use: { // Применяем лоадер
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'] // Используем пресет env
                }
            }
        }]
    },
    devServer: { // Конфигурация локального сервера
        static: {
            directory: path.resolve(__dirname, "dist"), // Статические файлы
        },
        devMiddleware: {
            publicPath: '/assets/', // Путь для подгрузки ресурсов
        }
    }
};