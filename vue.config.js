module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' // путь зранения файлов сайта на сервере (/assets/...) А если мы напишем /modules тогда получим (/modules/assets/...)
        : '/',
        assetsDir : 'assets', // создания папки assets при билде 
        productionSourceMap: false, // Запрещает добавления карт для js & css во время build
        
}