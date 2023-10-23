// Объекты
// const user = {} // пустой объект
// const doctor = {
//     // ключ: "значение"
//     name: "Arsen",
//     prof: "Стоматолог",
//     exp: 20,
//     skills: ["терапевт", "ортодонт", "имплантолог"],
//     age: 45,
//     room: {
//         terapevt: ["рентген-аппарат", "бор-машина"],
//         orthodont: ["операционный зал"]
//     },
//     schedule: {
//         monday: ["9:00", "17:00"],
//         tuesday: "10:00 - 16:00"
//     },
// }
// console.log(doctor.name) 
// console.log(doctor.schedule.monday) // 17:00

// Создать объект продукта с названием и ценой 
// const product = {
//     name: "молоко",
//     price: 500
// }
// // Сформировать строку и вывести в консоли
// // "В магазине нужно купить продукт {name}, его цена {price}"
// console.log(`В магазине нужно купить продукт ${product.name}, его цена ${product.price}`)

/*
    Массив - частный случай объекта

    const arr = [0 : "Arsen", 1 : "Vlad", 2: "Olga"]
    const obj = { 
        ключ: значение;
        name: "Arsen", // свойство
         prof: "стоматолог" // свойство,
         ... 
         }

    Объект - это коллекция или набор свойств.
    Каждое свойство состоит из названия и значения. 
    Пара Ключ/Значение 
    Ключ может быть строкой или символом(реже)
    Значение может быть любым
*/


// Массив объектов
const names = ["Arsen", "Vlad", "Arter", "Vlodymyr"] // names[0]
const products = [
    {
        name: "молоко",
        price: 500
    },
    {
        name: "масло",
        price: 400
    },
    {
        name: "гречка",
        price: 700
    },
]
// Задача. Отобразить в консоли сумму всех товаров в массиве products, используя цикл for
// console.log(`$sum{}`)
let sum = 0
for(let i = 0; i < products.length; i++) {
    sum = sum + products[i].price
}
console.log(sum)
/*
    const numbers = [10, 20 ,30, 40 ,50]
    let sum = 0
    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i] || sum += numbers[i]
    } 
*/

// Задача. Для каждого продукта сформировать и вывести строку в консоли
// В магазине нужно купить продукт {name}, его цена {price}
// console.log(products[0].name) // "молоко"
// for(let i = 0; i < products.length; i++) {
//     console.log(`В магазине нужно купить продукт ${products[i].name}, его цена ${products[i].price}`)
// }

/*
     i =  0, products = 2
     1. i = 0, 0 < 2 - true, console.log(`В маагзине нужно купить продукт ${products[0].name},
                         его цена ${products[0].price}`), i++, i = 1
    2. i = 1, 1 < 2 - true, console.log(`В маагзине нужно купить продукт ${products[1].name},
                         его цена ${products[1].price}`), i++, i =2
    3. i = 2, 2 < 2 - false, выход из цикла

*/

/*
    console.log(`В магазине нужно купить продукт {products[0].name}, его цена {products[0].price}`)
    console.log(`В магазине нужно купить продукт {products[1].name}, его цена {products[1].price}`)
*/