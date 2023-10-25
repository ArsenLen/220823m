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
    Ключ может быть строкой или символом(реже) $_
    Значение может быть любым
*/


// Массив объектов
// const names = ["Arsen", "Vlad", "Arter", "Vlodymyr"] // names[0]
// const products = [
//     {
//         name: "молоко",
//         price: 500
//     },
//     {
//         name: "масло",
//         price: 400
//     },
//     {
//         name: "гречка",
//         price: 700
//     }
// ]

// // Задача. Отобразить название продуктов, цена которых больше 500(включительно), используя цикл for
// for(let i = 0; i < products.length; i++) {
//     const {name, price} = products[i] // const name = products[0].name, const price = products[0].price
//     if(price >= 500) {
//         console.log(name)
//     }
// }

// const name = "Arsen"
// const name = "Artem"
// const name = "Yevhenii"
// const name = "Vlad"

/*
    1. const {name, price} = {
        name: "молоко",
        price: 500
    },

    2. const {name, price} =  {
        name: "масло",
        price: 400
    }

    3. const {name, price} =  {
        name: "гречка",
        price: 700
    }
*/

// const product = {
//     name: "молоко",
//     price: 500
// }
// const {name, price} = product

/*
    1. const name = products[0].name
        const price = products[0].price
    2. const name = products[1].name
        const price = products[1].price

    products[0] = {
        name; "",
        price: 500
    }
*/

// деструктуризация
// const user = {
//     name: "Arsen",
//     age: 25,
//     skills: ["html", "css", "js"]
// }
// const { name, age, skills } = user
// console.log(name) // Arsen
// console.log(age) // 25
// console.log(skills) // ["html", "css", "js"]
// const name = user.name
// const age = user.age
// const skills = user.skills

/*
    i++
    i = i + 1
    i += 1

    i = i + 2
    i += 2

    for(let i = 0; i < products.length; i++) -- увеличение i на 1 после каждой итерации
                цикл будет выполняться с шагом один.
    
    for(let i = 0; i < products.length; i+=2) -- увеличение i на 2 после каждой итерации
                цикл будет выполняться с шагом два
*/

/*
    i = 0; products.length = 3

    1. i = 0; 0 < 3 - true, Если products[0].price >= 500 - true, 
                        то console.log(products[0].name), i++, i = 1 
    2. i = 1; 1 < 3 - true, Если products[1].price >= 500 - false, i++, i =2
    3. i = 2; 2 < 3 - true, Если products[2].price >= 500 - true,
                            console.log(products[2].name), i++, i = 3


    i+=2
    1. i = 0; 0 < 3 - true, Если products[0].price >= 500 - true, 
                        то console.log(products[0].name), i+=2, i = 2 
    2. i = 2; 2 < 3 - true, Если products[2].price >= 500 - true,
                            console.log(products[2].name), i++, i = 4
*/

/*

    for(let i = 0; i < array.length; i++) {
        array[i] - текущий элемент, каждый элемент массива
    }
*/

// Задача. Отобразить в консоли сумму всех товаров в массиве products, используя цикл for
// console.log(`$sum{}`)
// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum = sum + products[i].price
// }
// console.log(sum)
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

const products = [
    {
        name: "ACER",
        model: "G500",
        price: 50000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "G200",
        price: 45000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "T237",
        price: 60000,
        category: "TV"
    },
    {
        name: "Iphone",
        model: "15",
        price: 70000,
        category: "phone"
    },
    {
        name: "Lenovo",
        model: "T700",
        price: 65000,
        category: "TV"
    }
]
// Вывести название, модель, цену и категорию всех продуктов в консоли в виде ""
// "Название - {name}, Модель - {model}, Цена - {price}, категория - {category}"
// используя деструктуризацию 
// for(let i = 0; i < products.length; i++) {
//     console.log(`
//     Название - ${products[i].name},
//     Модель - ${products[i].price}
//     цена - ${products[i].price},
//     категория - ${products[i].category}`)
// }

// // использую деструктуризация
// for(let i = 0; i < products.length; i++) {
//     const {name, price, model, category} = products[i]
    // console.log(`
    // Название - ${name}, 
    // цена - ${price},
    // модель - ${model}, 
    // категория - ${category}`)
// }

// Вывести название, модель, цену продуктов из категории tv
// и добавить их в новый массив productsTv = []
// const productsTv = []
// for(let i = 0; i < products.length; i++) {
//     const {name, price, model, category} = products[i]
//     if(category == "TV") {
//         console.log(`
//         Название - ${name}, 
//         цена - ${price},
//         модель - ${model},`)

//         // productsTv.push({name, price, model})
//         productsTv.push(products[i])
//     }
// }
// console.log(productsTv)
/*
    {
        name: "Iphone",
        model: "15",
        price: 70000,
        category: "phone"
    }

    Название - Iphone, модель - 15, цена - 70000, категория - phone
*/

// Вывести название всех продуктов и цену со скидкой 10% в консоли
// "Название товара - '{name}', его цена цена со скидкой - {price - 10%}"
// использовать деструктуризация
// for(let i = 0; i < products.length; i++) {
//     console.log(`Название товара - ${products[i].name}, 
//         его цена со скидкой ${products[i].price - (products[i].price * 0.1)}`)
//     // с деструктуризацией
//     const {name, price} = products[i]
//     console.log(`Название товара - ${name}, его цена со скидкой ${price -  (price * 0.1)}`)
// }

/*
    price = 6000
    6000 * 10 / 100
    6000 * 0.1 = 600 - сама скидка

    6000 - 600 = 5400 - цена товара со скидкой

    6000 * 0.9 = 5400

    100% - 10% = 90% = 0.9
*/