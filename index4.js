const fs = require('fs')

/*
fs.writeFileSync('some.txt', 'Hello World!')
let result = fs.readFileSync('some.txt', 'utf-8')
console.log(result)
*/



fs.readFile('file.txt', 'utf-8', (err, data) =>{
    fs.writeFileSync('file.txt',  data + '\nSome text', (err, data) => {
        console.log('Все сработало!')
    })
})

