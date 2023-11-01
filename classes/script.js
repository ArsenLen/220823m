// // Классы. 
// const title = document.querySelector("h1")
// // console.log(title.classList) // список классов

// //1.  добавить класс item для элемента
// title.classList.add("item")
// // 2. удалить класс my-title
// title.classList.remove("my-title")
// // 3. переключаем класс item
// title.classList.toggle("item") 

/* 
    elem.classList - отдает классы элемента
    elem.classList.add("className") - добавляет класс для элемента
    elem.classList.remove("className") - удаляет класс у элемента
    elem.classList.toggle("className") - если класс есть - удаляем. если класса нет - добавляем
    elem.classList.contains("className") - проверяем есть ли класс у элемента. true/false
*/


// На основе массива дел, создать карточки с todo-item в todo-list. forEach, innerHTML. 
const todo = ["Сварить суп", "Сделать ДЗ", "Убраться дома", "Поваляться"]
const container = document.querySelector(".todo-list")

todo.forEach(function(text) {
    container.innerHTML += `
                <div class="todo-item">
                    <h5>
                        ${text}
                    </h5>
                </div>
    `
})

// При втором нажатии на карточку, убирать у нее зеленый цвет и возвращать в начальное состояние
const todoCards = document.querySelectorAll(".todo-item") // Нахожу все карточки [{}, {}, {}, {}]
todoCards.forEach(function(todoCard) {
    todoCard.addEventListener("click", function(event) {
        // event.target.classList.add("active")
        todoCard.classList.toggle("active") // переключаем класс active 
    })
    // любое действие здесь будет выполнено 4 раза
    
})

// При нажатии на кнопку "Выбрать все", добавлять класс active для всех карточек.
/*
    1. При нажатии на кнопку "Выбрать все", в консоли отображать Hello
    2. Отобразить в консоли каждую карточку из массива todoCards
*/
const allBtn = document.querySelector(".all-btn") // Нахожу кнопку "Выбрать все"
allBtn.addEventListener("click", function() {
    todoCards.forEach(function(todoCard) {
        todoCard.classList.add("active")
    })
})

// При нажатии на кнопку "отменить все", убирать класс active для всех карточек
const allReset = document.querySelector(".all-reset") // Нахожу кнопку "убрать все"
allReset.addEventListener("click", function() { // вешаю слушатель клика на кнопку "убрать все"
    todoCards.forEach(function(todoCard) { // прохожусь по всем карточкам 
        todoCard.classList.remove("active") // убираю класс active у всех карточек
    })
})

/*
    todoCards = [{}, {}, {}, {}]
        {} - карточка - <div class="todo-item"><h5>Название<h5></div>

    numbers = [10, 12, 15, 20, 50]
*/





// При нажатии на карточку, добавлять ей класс .active
/*
    1. найти все карточки - querySelectorAll()
    2. пробегаемся по карточкам и вешаем слушатель на каждую. forEach() + addEventListener().
    3. заибраем из объекта event текущий элемент, карточку, на которую кликнули 
            и добавляем ей класс .active. classList.add("active"). event.target - карточка на которую кликнули
*/

// Создать кнопку в html, при нажатии на которую будут сбрасываться все классы active у карточек. 

/*
    <div>
        <h5 class="todo-item">
            {название дела}
        </h5>
    </div>
*/
