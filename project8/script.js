// обработка форм
// 1. При отправке формы в консоли отобразить "отправлено"
// 2. При отправке формы в консоли отображать данные из полей, которые были заполнены

const form = document.querySelector("form") // Находим форму
const productName = document.querySelector(".product-name") // находим input name
const productPrice = document.querySelector(".product-price") // находим input price
const productsContainer = document.querySelector(".products") // находим контейнер для продуктов

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
})

function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}


// Отрисовать карточки элементов на основе массива products. innerHTML
function showProducts() {
    productsContainer.innerHTML = "" // очищаем контейнер перед отрисовкой новых элементов
    products.forEach(function(product) {
        productsContainer.innerHTML += `
            <div class="product-card">
                <h5 class="product-card-name">${product.name}</h5>
                <p class="product-card-price">${product.price}</p>
            </div>
        `
    })
}
showProducts() // первая отрисовка продуктов



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