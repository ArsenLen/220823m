// Создание элемента в DOM

// метод createElement()
// const title = document.createElement("h1") // создаем тег h1
// title.innerText = "Это мой заголовок" // добавляем текст в h1
// const header = document.querySelector("header") // ищем header, чтобы добавить туда h1
// header.append(title) // добавляем title в тег header

/*
    Создание элемента
    1. создаем тег - createElement("tagName")
    2. добавляем содержимое - innerText
    3. находим элемент, куда мы положим созданный нами тег - querySelector()
    4. кладем созданный тег в найденный элемент в 3 этапе - append()

    append() принимает созданный с помощью createElement тег
*/

// Задача. Создать тег p с текстом "hello world" в div.item
// const item = document.querySelector(".item") // нахожу div.item чтобы добавить туда p
// const paragraph = document.createElement("p")
// paragraph.innerText = "hello world"
// item.append(paragraph) // В item добавляю paragraph

// Задача. Создать тег p с текстом "hello world" в div.item
// const item = document.querySelector(".item") // поиск элемента, куда хотим поместить html
// item.innerHTML = "<p>Hello world</p>"
// item.insertAdjacentHTML("afterbegin", `<div>
//                                             <p>Hello World</p>
//                                             <a>Hello World</a>
//                                         </div>`)


/*
    element.insertAdjacentHTML("position", "html содержимое")
    
    position:
    1. beforebegin - до начала элемента (до открывающего тега)
    2. afterbegin - сразу после открывающего тега
    3. beforeend -  перед закрывающим тегом
    4. afterend - после конца элемента (после закрывающего тега)

    element.innerHTML = "<p>Hello World</p>" -- пересоздает уже имеющиеся теги
*/


// Создать множество параграфов(p) с числами от 0 до 19 в div.item . используя цикл for
// const item = document.querySelector(".item")
// for(let i = 0; i < 20; i++) {
//     const paragraph = document.createElement("p") // создаст 20 тегов p
//     paragraph.innerText = i // i - 0, i - 1, i - 2
//     item.append(paragraph)
// }
// for(let i = 0; i < 20; i++) {
//     item.insertAdjacentHTML("beforeend", `<p>${i}<p>`)
// }


/*
    1. i = 0, 0 < 20 - true, <p>0</p>
    2. i = 1, 1 < 20 - true, <p>1</p>
*/

/*
    1. вывести в консоли числа от 0 до 19
    2. создать тег p с выведенными значениями
*/

// Написать цикл, который проходится по массиву строк и создает тег p для каждой строки
// и добавляет в item. insertAdjacentHTML()
// const names = ["Arsen", "Artem", "Vlad", "Alina", "Iren"]
// const item = document.querySelector(".item")
// for(let i = 0; i < names.length; i++) {
//     item.insertAdjacentHTML("beforeend", `<p>${names[i]}</p>`)
// }

// for(let i = 0; i < names.length; i++) {
//     const p = document.createElement("p")
//     p.innerText = names[i]
//     item.append(p)
// }

/*
    i = 0, names[0] - "Arsen"
    i = 1, names[1] - "Artem"
    i = 2, names[2] - "Vlad"
    i = 3, names[3] - "Alina"
    i = 4, names[4] - "Iren"
*/

/*
    <div class="item">
        <p>Arsen</p>
        <p>Artem</p>
        ...
        <p>Iren</p>
    </div>
*/


// Задача. Создать тег h1 внутри header с помощью insertAdjacentHTML и
// добавить текст из переменной text в h1
// const text = "My title"

// const header = document.querySelector("header") // находим header
// header.insertAdjacentHTML("beforeend", `<h1>${text}</h1>`) // добавить что-то() в тег header

/*
    Алгоритм добавления тега с помощью insertAdjacentHTML
    1. находим элемент, куда нужно положить новый тег. querySelector()
    2. определяем позицию (чаще всего - beforeend)
    3. создаем html содержимое (<h1>Добавленный текст, контент</h1>)
*/

const products = [
    {
        name: "Молоко",
        price: 500
    },
    {
        name: "Гречка",
        price: 700
    },
    {
        name: "Масло",
        price: 600
    },
    {
        name: "Рис",
        price: 700
    },
    {
        name: "Мука",
        price: 750
    },
]

// Задача. Отобразить карточки товаров в div.item, в которой в теге h5 будут названия продуктов/
// а в теге p их цена
const item = document.querySelector(".item")

for(let i = 0; i < products.length; i++) {
    console.log(products[i].name) // Молоко, гречка, масло
    item.insertAdjacentHTML("beforeend", ` <div class="product">
                                                <h5>${products[i].name}</h5>
                                                <p>${products[i].price}</p>
                                                </div> `)
}


/*
    fnName(10, 15)
    15, 14, 13, 12, 11, 10

*/

// С помощью insertAdjacenthtml в тег div.item добавить тег h5 с названием первого товара
// console.log(products[0].name) // Молоко
// item.insertAdjacentHTML("beforeend", `<div>
//                                         <h5>${products[0].name}</h5>
//                                         <p>${products[0].price}</p>
//                                        </div>`)
// item.insertAdjacentHTML("beforeend", `<div>
//                                         <h5>${products[1].name}</h5>
//                                         <p>${products[1].price}</p>
//     

// Отобразить в консоли строку `В магазине нужно купить {name}, его цена {price}`</div>`)










