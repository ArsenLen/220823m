// callback. что такое коллбэк и пример.

/*
    element.addEventListener("type", cb) - слушатель события,
        коллбэк - это функция, в которой указываются действия,
            выполняющиеся в ответ на события
    Какие типы событий вы знаете:
        1. click -нажатие элемент
        2. submit - отправка формы
        3. input - ввода символов в поля ввода input
        4. scroll - скролл страницы
        5. mouseover/mouseout - наведение/отведение мыши от элемента

    array.forEach(cb) - метод для прохода по массиву
        коллбэк - это функция, которая выполняется для
            каждого элемента в массиве и принимает 3 агрумента
                1. item - текущий элемент массива.  // array[i] - текущий элемент в for loop
                2. index - индекс текущего элемента. // i - индекс текущего элемента
                3. arr - сам массив, по которому мы пробегаемся 

    array.forEach(function({title, descr, likes}) {
        console.log(title, descr, likes)
    })

    item = {
        title:
        descr:,
        likes
    }
    const {title, descr, likes} = item

    map(cb), filter(cb), reduce(cb) - основные методы прохода
        по массиву, которые принимают коллбэк

    Отличие между immediately invoke function и callbak-function?
            Первая вызывается нами в тот момент, когда мы захотим
            callback вызывается другой функцией или методом

*/

// function greeting() {
//     console.log("hello")
// }
// greeting() // immediately invoke function

// el.addEventListener("click", function() {
//     console.log("hello")
// })

// Задача. Есть массив, состоящий из объектов. 
// a) Отобразить каждый элемент массива в консоли, используя метод forEach()
// б) Отобразить только те элементы, количество лайков которых больше 70
// в) Отобразить название и описание тех постов, лайки которых больше 70 в виде 
// "Заголовок: {title}, Описание: {descr}"
// const posts = [
//     {
//         title: "My first title",
//         descr: "My first descr",
//         likes: 100
//     },
//     {
//         title: "My second title",
//         descr: "My second descr",
//         likes: 50
//     }, 
//     {
//         title: "My third title",
//         descr: "My third descr",
//         likes: 120
//     }
// ]
// posts.forEach(function(post) {
//     if(post.likes > 70) {
//         console.log(`Заголовок: ${post.title}, Описание: ${post.descr}`)
//     }
// })

/*
    const user = {
        name: "Arsen",
        age: 25
    }
    `My name is ${user.name} \\n`
*/

/*
    callback создается в другом месте, не внутри метода forEach, а снаружи

    function loggingElement(post) {
    console.log(post)
    }

    posts.forEach(loggingElement)
*/


// При нажатии на квадрать в консоли отобразить "click"
// Поменять цвет квадрата на синий после клика
// const item = document.querySelector(".item") // ("div")

// function getRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 256) // 0 - 256
//     return randomNumber; 
// }

// item.addEventListener("click", function() {
//     // item.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})` // rgb(100, 105, 45)
// })

/*
    item  = {
        ...
        style : {
            ...
            backgroundColor: ""
        }
    }
    item.style.backgroundColor = "blue" 

    console.log(elem.style)
    element.style.backgroundColor = "color, rgba()" - цвет фона

    .classList.add("active")
*/

/*
    element.addEventListener("type", cb)
        element - найденный в DOM элемент
        type - тип события
        cb - функция, которая описывает действия, выполняющиеся в ответ на клик

    element.getElementById
    element.getElementByClassName
    element.getElementByTagName

    querySelector, querySelectorAll - методы поиска элемента в DOM
*/


// При наведении на элемент, присвоить ему класс .mouseover
// const item = document.querySelector(".item") 
// item.addEventListener("mouseover", function() {
//     item.classList.add("mouseover");
// })

// // При отведении мыши удалить класс mouseover
// item.addEventListener("mouseout", function() {
//     item.classList.add("mouseout")
// })
/*
    .classList.add("active") - добавить
    .classList.remove("active") - удалить
    .classList.toggle("active") - переключить

    el.addEventListener("type", cb)
        type:
            1. click
            2. mouseover - наведение
            3. submit
            4. mouseout - отведение
*/


/*
    submit - событие, которое вызывается при отправке формы. Это события вызывается у самой 
        формы, а НЕ у кнопки, которая вызывает отправку формы. 

    По умолчанию после отправки формы, обновляется страница. 
        Как убрать это действие по умолчанию?
        event.preventDefault() - метод, который отменяет действие по умолчанию при отправке

    Как прочитать данные, которые ввел пользователь в инпут?
        inputElement.value - свойство тега input, которое хранит введеное в поле ввода значение.
*/

// После отправки формы выводить в консоль введенное значение в каждое поле. 
const form = document.querySelector(".form")
const userName = document.querySelector(".user-name")// нахожу инпут ИМЯ
const userAge = document.querySelector(".user-age") // нахожу инпут ВОЗРАСТ
const userAddress = document.querySelector(".user-address") // нахожу инпут Адрес

form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(userAddress.value, userAge.value, userName.value)
    console.log(event.target[0].value, event.target[1].value, event.target[2].value)
})


