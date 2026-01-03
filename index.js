const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"USD", to:"JPY", amount:100, isDecimalComma:true})

currencyConverter.convert().then((response) => {
        console.log("1. Сырой ответ:", response)
        console.log("2. Тип ответа:", typeof response)
        console.log("3. Это NaN?", isNaN(response))
        console.log("4. Попытка преобразовать в число:", Number(response))
    }).catch((error) => {
        console.log("5. Произошла ошибка:", error)
    })


