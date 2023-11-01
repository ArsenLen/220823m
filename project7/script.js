// // При нажатии на карточку переключать перевод слов
// const item = document.querySelector(".item-1")
// const texts1 = document.querySelectorAll(".item-1 p") // [{p}, {p}] список всех тегов p в div.item-1
// item.addEventListener("click", function() {
//     // действие, которое происходит по клику на item
//     texts1.forEach(function(text) {
//         text.classList.toggle("hidden")
//     })
// })

// Задача. При нажатии на карточку item-2 так же переключать слова.
// const item2 = document.querySelector(".item-2") 
// const texts2 = document.querySelectorAll(".item-2 p") // Нахожу список всех тегов p в div.item-2
// item2.addEventListener("click", function() {
//     texts2.forEach(function(text) {
//         text.classList.toggle("hidden")
//     })
// })

// При нажатии на карточки, переключать теги p, которые относятся к этой карточке
// 1. Найти все карточки и при нажатии на каждую в консоли отображать hello
const items = document.querySelectorAll('.item') // нахожу список карточек [{div}, {div}]
items.forEach(function(item) {
    item.addEventListener("click", function() {
        const texts = item.querySelectorAll("p") // [{p}, {p}] список тегов p, которые относятся к нажатой карточке
        texts.forEach(function(text) {
            text.classList.toggle("hidden")
        })
    })
})

// Есть массив из объектов. В каждом объекте есть строки на ру и анг. 
// Для каждого объекта отрисовать разметку 
// При нажатии на каждую карточку переключать слова с английского на русский и наоборот
// Создать две кнопки. RU и EN. 
// при нажатии на RU должны отображать только русские слова
// при нажатии на EN только английские
const strings = [
    {
        en: "Car",
        ru: "Машина"
    },
    {
        en: "book",
        ru: "Книга"
    },
    {
        en: "hello",
        ru: "Привет"
    }
]
/*
     <div class="item">
        <p class="hidden">{Английское слово}</p>
        <p>{Русское слово}</p>
    </div>
*/

/*
    1. Найти все карточки. querySelectorAll() // [{div}, {div}, {div}]
    2. Пройтись по всем карточкам с помощью forEach()
    3. На каждую карточку повесрить слушатель соыбтия addEventListener.
    4. выполнить действие console.log("hello") при нажатии на каждую
*/

/*
// 1. При нажатии на карточку, отображать в консоли "клик"
// 2. Найти все теги p и отобразить каждый в консоли.
// Не просто отображать в консоли теги p. а для каждого вызвать метод toggle. переключать им класс hidden

    2.1. Найти все теги p. querySelectorAll() // вернет список всех тегов p. [{}, {}]
    2.2. Пробежаться по массиву из тегов p и отобразить каждый в консоли. forEach()
*/

/*
    elem.addEventListener("click", function() {})

    el.classList.toggle("hidden")
*/