const fs = require('fs')


// Синхронная функция блокирует выполнение кода до момента полного создания самой папки
// Асинхронная функция не блокирует основной поток выполнения, операция выполняется в фоне, а результат обрабатывается позже

//fs.mkdirSync('txt-directory')

/* fs.mkdir('txt-directory',() => {
    fs.writeFile('./txt-directory/some.txt', 'Hello Hello', () => {})
}) */

fs.unlink('./txt-directory/some.txt', () => {
    fs.rmdir('./txt-directory', () => { })
})