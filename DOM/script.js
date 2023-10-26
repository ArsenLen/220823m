// DOM-дерево

// // Навигация по html с помощью js
// const title = document.querySelector("h1")
// console.log(title.innerText) // найденный в html тег, берем его свойство innerText

// const myTitle = document.querySelector(".my-title")
// console.log(myTitle.innerText) // найденный в html элемент с классом .my-title
// myTitle.innerText = "Это мой заголовок"

// Задача. поменять текст во всех тегах h1 на "Это мой заголовок"
// const titles = document.querySelectorAll("h1")
// console.log(titles) // [{h1}, {h1}, {h1}] - nodelist

// for(let i = 0; i < titles.length; i++) {
//     titles[i].innerText = "Это мой заголовок"
// }
/*
    i = 0, titles.length = 3
    1. i = 0; 0 < 3 - true, titles[0].innerText = "Это мой первый заголовок", i++, i = 1
    2. i = 1; 1 < 3 - true, titles[1].innerText = "Это мой первый заголовок", i++, i = 2
    3. i = 2; 2 < 3 - true, titles[2].innerText = "Это мой первый заголовок", i++, i = 3
    4. i = 3; 3 < 3 - false, выход из цикла 
*/

    // titles[0].innerText = "Это мой заголовок"
    // titles[1].innerText = "Это мой заголовок"
    // titles[2].innerText = "Это мой заголовок"



/*
    innerText - свойство, которое позволяет отобразить или назначить текстовое
        содержимое html тега

    document.querySelector("selector") - метод, который позволяет найти элемент на странице html
        с помощью селекторов
    querySelector находит первый попавшийся элемент с заданным селектором

    document.querySelectorAll("selector") - метод, который позволяет найти все элементы на стрнанице html
        с помощью селекторов

        селекторы:
        1. по тегу - h1 {}
        2. по классу - .item {}
        3. по id - #red
        4. по аттрибуту - input[type="submit"]
*/

/*
    DOM-дерево - представление html тегов в виде объектов
    DOM-дерево представлено в виде древовидной структуры
    На этапе отрисовки в браузере все теги превращаются в объекты,
        с которыми работает JavaScript
    DOM нужен для того, чтобы мы могли манипулировать(менять содержимое
        менять стили и т д) интерефейсом после загрузки страницы


*/

/*
        const user = {
            name: "Arsen",
            age: 25
            sayHello: function() {
                // this.name - "Arsen" 
                console.log('hello')
            }
        }
        user.name
        user.sayHello() - метод
*/

/*
    const user = {
        name: "Arsen", свойство
        age: 25, свойство
        sayHello: function() {  // свойство или метод или функция
            console.log('hello')
        }
    }
    свойства - name, age, sayHello
    метод - sayHello

    function sayHello() {
        console.log("hello")
    } - функция
*/


// Задача. а) Поменять текст у первого тега p на "Привет"
// const text = document.querySelector("p")
// text.innerText = "Привет"
// б) Поменять текст у всех тегов p на "Привет"
// const texts = document.querySelectorAll("p") // [{p}, {p}, {p}, {p}]
// console.log(texts)
// for(let i = 0; i < texts.length; i++) {
//     texts[i].innerText = "Привет"
// }

// в) Поменять текст у второго тега p на "Привет"
// const text = document.querySelector(".item p") // Тег p, который лежит внутри элемента с классом item
// text.innerText = "Привет"

// document.querySelector(".item p").innerText = "Привет"


/*
    методы навигации по DOM

    .firstElementChild - первый дочерний элемент
    .lastElementChild - последний дочерний элемент
    .parentElement - родительский элемент

*/

// Работа с атрибутами
const img = document.querySelector("img")
const source = img.getAttribute("src")
console.log(source) // ../projects3/images/img1.jpg

img.setAttribute("src", "../project3/images/img2.jpg") // меняю атрибут src на новый 

/*
    getAttribute(attrName) - получить атрибут по его названию
    setAttribute(attrName, attrValue) - назначить атрибут, передав его название и значение
*/

/*
    function declaration:
    
    function fnName() {
        
    }
*/

// function declaration
// sum(10, 15)
// function sum(a, b) {
//     console.log(a + b)
// }

// // function expression

// const sum1 = function(a, b) {
//     console.log(a + b)
// }
// sum1(10, 15)

// // arrowFunction. ES6
// const sum2 = (a, b) => console.log(a + b)

// const greeting = name => console.log(`Привет ${name}`)

// array.map(function(a) {
//     console.log("hello")
// })

// array.map(a => console.log("hello"))


