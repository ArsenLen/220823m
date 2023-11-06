// обработка форм
// 1. При отправке формы в консоли отобразить "отправлено"
// 2. При отправке формы в консоли отображать данные из полей, которые были заполнены

const form = document.querySelector("form") // Находим форму
const productName = document.querySelector(".product-name") // находим input name
const productPrice = document.querySelector(".product-price") // находим input price
const productsContainer = document.querySelector(".products") // находим контейнер для продуктов
const notification = document.querySelector(".notification") // нахожу блок уведомления
const notificationText = document.querySelector(".notification-text") // нахожу текст уведомление

const products = [
    {
        name: "Велосипед",
        price: 40000
    },
    {
        name: "Самокат",
        price: 15000
    }
]

form.addEventListener("submit", function(event) {
    event.preventDefault() // отменяет перезагрузку страницы при отправке формы
    // console.log(productName.value) // название которое заполнил пользователь в инпуте
    // console.log(productPrice.value) // цена которую заполнил пользователь в инпуте
    // Создаем объект, который нужно добавить в массив products
     const newProduct = {
        name: productName.value,
        price: productPrice.value
    }
    // Добавляем объект newProduct в массив products
    products.push(newProduct)
    // Отрисовка продуктов после обновления массива
    showProducts()
    // Очистка полей формы после отправки
    clearInputs()
    // Отображаем уведомление
    showNotification("Продукт успешно добавлен")
})

function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}

// Написать функцию, которая будет отображать уведомление и добавлять текст переданный в аргументе
function showNotification(text) {
    notification.style.display = "block" // отображаем блок с уведомлением
    notificationText.innerText = text // назначаем ему текст переданный как аргумент
    setTimeout(function() {
        notification.style.display = "none"
    }, 2000)
}

/*
    функция setTimeout - метод браузерного планирования, который позволяет  
        вызвать переданную функицю через определенный промежуток времени
    
    setTimeout(cb, time)
        cb - функция, которую нужно вызвать через определенное время
        time - время в миллисекундах, которое определяет промежуток через который нужно вызвать cb
*/
/*
    1. отобразить элемент. Поменять свойство стилей на display:block
    2. назначить текст для элемента. 
*/


// Отрисовать карточки элементов на основе массива products. innerHTML
function showProducts() {
    productsContainer.innerHTML = "" // очищаем контейнер перед отрисовкой новых элементов
    products.forEach(function(product, index) {
        productsContainer.innerHTML += `
            <div class="product-card">
                <h5 class="product-card-name">${product.name}</h5>
                <p class="product-card-price">${product.price}</p>
                <button class="delete-btn" id="${index}">X</button>
            </div>
        `
    })
    deleteProduct() // вызываем функцию удаления продукта каждый раз после отрисовки элементов    
}
showProducts() // первая отрисовка продуктов


// Функция удаления продукта 
function deleteProduct() {
    const deleteBtns = document.querySelectorAll(".delete-btn") // [{btn}, {btn}, {btn}]

    deleteBtns.forEach(function(button) {
        button.addEventListener("click", function() {
            button.parentElement.remove() // удаляет только из html
            const currentId = button.id // получаю индекс элемента, который нужно удалить из массива
            products.splice(currentId, 1) // удаляю 1 элемент с индексом current id из массива products
            showProducts() // после удаления перерисуй мне интерфейс 
        })
    })
}

const div = document.querySelector("div")

const currentWidth = div.style.width
div.style.width = currentWidth + `${20}px`

// const searchInput = document.querySelector(".search")

// searchInput.addEventListener("input", function(event) {
//     const searchQuery = event.target.value // поисковый запрос. текущее состояние input. данные в inut
//     const filteredProducts = findProduct(searchQuery)
//     showProducts(filteredProducts)
// })
// // Фильтруем массив products. Ищем в каждом продукте в названии соответсвующую строку
// function findProduct(value) {
//     return products.filter(function(product) {
//         return product.name.includes(value)
//     })
// }
/*
    array.filter(cb) - метод, который позволяет отфильтровать массив по какому-либо условию 
*/

/*
    Событие input - событие ввода символа в поле ввода input
*/

/*
    <div class="parent">
        <div>
            <button></button>
        <div>
    </div>

    button.parentElement - <div></div>

    button.closest("div") -  <div class="parent"></div>   
*/


/*
    splice(index, num)
        index - индекс элемента, с которого нужно начать удалять из массив
        num - количество элментов, которое нужно удалить

    const array = ["Arsen", "Vlad", "Dmitrii", "Viktor"]
        array.splice(1, 2) - удалить 2 элемента начиная с индекса 1 из массива array ["Arsen", "Viktor"]

        // array.splice(0, 1) - удалить 1 элемент с индексом 0 из массива array ["Vlad", "Dmitrii", "Viktor"]
        
        */

/*
    elem.parentElement - родительский элемент
    elem.remove() - метод удаления из html
*/


/*
        <div class="product-card">
            <h5 class="product-card-name">Велосипед</h5>
            <p class="product-card-price">40000</p>
        </div>
*/

/*
    submit - событие, которое происходит при отправке формы
    по умолчанию при отправке формы страница всегда перезагружается,
        нам нужно отменять это действие по умолчанию
    для того чтобы его отменить, нужно вызвать метод preventDefault(),
        который реализован у объекта события event

    Для того, чтобы получить данные из формы, можно обратиться к input
        и получить свойство value,
        value - свойство, которое хранит значение поля input.
    Данные так же можно получить из объекта события event

    input = {
        value: "test"
    }
*/