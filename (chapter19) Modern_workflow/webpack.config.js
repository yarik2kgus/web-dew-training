const path = require('path'); // Импорт модуля path из Node.js для легкого поиска файлов

module.exports = {  // module.exports используется для экспорта конфигурационного объекта Webpack, то есть без него нода запуская вебпак не будет видеть его конфигурацию чтобы Webpack мог получить доступ к настройкам при запуске из файла webpack.config.js.
    entry: './src/index.js', // Точка входа для сборки (тут импортирован весь наш js код)
    output: {
        path: path.resolve(__dirname, 'dist/assets'), // Путь сохранения итогового файла
        filename: 'bundle.js' // Имя итогового файла
    },
    module: { // module используется для указания правил (rules), которые описывают, как Webpack должен обрабатывать различные типы файлов с помощью лоадеров (loaders), в нашем случае описываем как будет исопльзовать babel.
        rules: [{
            test: /\.js$/, // Регулярное выражение для поиска js файлов (ищет все файлы с расширение js)
            exclude: /node_modules/, // Исключаем папку node_modules
            use: { // Применяем лоадер (бабл) что бы конвертировать его в поддерживаемый всеми код
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