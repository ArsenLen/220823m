// События
// При клике на кнопку, в консоли отобразить "на меня кликнули"
// const button = document.querySelector(".btn") // Находим кнопку
// button.addEventListener("click", function() {
//     console.log("На меня кликнули")
// })

/*
    element.addEventListener("type", cb). добавить слушатель события
    element.removeEventListener("click")

    метод addEventListener позволяет повесить слушатель события
    на определенный элемент, чтобы в ответ на событие сделать действие

    1. type - тип события - (клик, нажатие по клавишка, скролл, ввод данных)
    2. cb - коллбэк функция - функция обратного вызова
        передаем вызов функции другой функции или методу.
*/

// function hello() {
//     console.log("hello")
// }

// hello() // immediately invoke function - немедленный вызов функции

// При нажатии на кнопку button отображать в консоли значение числовой переменной
// При каждом нажатии оно должно увечиваться на 1. изначально переменная равна 0
// Доработать алгоритм так, чтобы при нажатии на кнопку "Минус", в теге h1 значение уменьшалось на 1
// const button = document.querySelector(".btn")
// const buttonMinus = document.querySelector(".minus") // нахожу кнопку с классом minus
// const title = document.querySelector("h1")
// let counter = 0
// button.addEventListener("click", function(event) {
//     counter++ // увеличение переменной на 1 инкремент
//     title.innerText = counter // в h1 добавляю значение переменной counter 
// })

// buttonMinus.addEventListener("click", function() {
//     counter-- // декремент, уменьшение на 1
//     title.innerText = counter
// })

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }


// {
//     let number = 10
// }
// console.log(number)// нет переменной number

// innerText - позволяет прочитать или назначить текстовое содержимое тегу

// button.addEventListener("click", function() {
//     showCounter()
// })
// function showCounter(a, b, c) {
//     console.log(counter++)
// }



/*
    console.clear() очистить консоль

    counter + 1
    1й клик: counter+1. 0 + 1 = 1. console.log(1). counter + 1 
    2й клик: counter+1. 0 + 1 = 1. console.log(1)

    counter++
    1й клик: counter = counter + 1. counter = 0 + 1. counter = 1. console.log(1)
    2й клик: counter = counter + 1. counter = 1 + 1. counter = 2. console.log(2)
*/

/*
    i++
    i = i + 1
    i += 1

    // const button = document.querySelector(".btn") // Находим кнопку
    // button.addEventListener("click", function() {
    //     console.log("На меня кликнули")
    // })
*/

// При нажатии на кнопку "red", менять ее цвет на красный
const buttonRed = document.querySelector(".red") // Ищем кнопку red по классу .red
const buttonGreen = document.querySelector(".green") // Ищем кнопку green по классу .green
const buttonBlue = document.querySelector(".blue") // Ищем кнопку blue по классу .blue
const buttonYellow = document.querySelector(".yellow") // Ищем кнопку yellow по классу .yellow
const square = document.querySelector(".item") // Ищем div по классу .item

const buttons = document.querySelectorAll("button") // [{}, {}, {}, {}]  nodeList

for(let i = 0; i < buttons.length; i++) {
    // console.log(buttons[i])
    buttons[i].addEventListener("click", function(event) {
        // console.log(event)
        // console.log(event.target.className) // конкретно та кнопка из четырех, на которую кликнули
        square.style.backgroundColor = event.target.className
    })
}

// buttonRed.addEventListener("click", function() {
//     square.style.backgroundColor = "red"
// })

// buttonGreen.addEventListener("click", function() {
//     square.style.backgroundColor = "green"
// })

// buttonBlue.addEventListener("click", function() {
//     square.style.backgroundColor = "blue"
// })

// buttonYellow.addEventListener("click", function() {
//     square.style.backgroundColor = "yellow"
// })
// buttonPink.addEventListener("click", function() {
//     square.style.backgroundColor = "pink"
// })


// Найти все кнопки в html, пройтись по ним циклом и на каждую кнопку повесить слушатель события.
// При нажатии на каждую кнопку в консоли отображать "на меня кликнули"
// const buttons = document.querySelectorAll("button") // [{}, {}, {}, {}]  nodeList

// for(let i = 0; i < buttons.length; i++) {
//     // console.log(buttons[i])
//     buttons[i].addEventListener("click", function(event) {
//         // console.log(event.target.className) // конкретно та кнопка из четырех, на которую кликнули
//         square.style.backgroundColor = event.target.className
//     })
// }

/*
    event - объект события, в котором располагается вся информация о событии
        (какой элемент вызвал событие, где находится элемент вызвавший событие,
                класс элемента, который вызвал событие)

    event.target - это объект, который вызвал событие. в нашем случае - кнопка, на которую кликнули
*/

/*
    1. i = 0, 0 < 4 - true; console.log(buttons[0]) // red
    2. i = 1, 1 < 4 - true; console.log(buttons[1]) // green
*/


// buttons.addEventListener() // не можем повесить слушатель на список

/*
    console.log(buttons) // [{}, {}, {}] у списка элементов нет слушателя события(?)
*/



// Создать еще три кнопки с разными цветами и написать обработчики для каждой из них
// green, blue, yellow

/*
    element.style.backgroundColor = "color" //color = rgba(), red 
    element - найденный в DOM элемент, которому хотим поменять css свойство
      element.style.backgroundColor = "red" 

    1. найти кнопку и div с классом item
    2. на кнопку повесить слушатель события "клик"
    3. в функцию передать действие изменения цвета на красный - element.style.backgroundColor 

    element = {
        innerText: "Hello World",
        style: {
            color: "black",
            backgroundColor: "red"
        }
    }

    #777777
    rgba(N, N, N)
        Math.random()

    */


        /*
            Создать интерактивную галерею. 
                1. При нажатии на каждую из картинок, забираем ее ссылку и в нижней части
                    интерфейса отобразить в большом размере.

        */
