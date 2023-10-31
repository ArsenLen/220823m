// Метод .forEach()

/*
    Еще один способ перебрать массив, но без создания явного цикла

    .forEach() - метод массива, который позволяет вызвать коллбэк-функцию
        ко всем элементам массива
        forEach более читабелен и требует написания меньшего кода
*/

// Вывести в консоль имя каждого пользователя из массиваа names с помощью цикла for

// const names = ["Nina", "Vlad", "Artem", "Olga", "Liudmyla"]

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]) // names[i] - текущий элемент, каждый элемент. элемент массива в текущий итерации
// }

// names.forEach(function(name) {
//     console.log(name) // сам текущий элемент
//     // console.log(index) // индекс текущего элемента
//     // console.log(array) // массив который перебираем
// })

// const users = [
//     {
//         name: "Arsen",
//         age: 25
//     },
//     {
//         name: "Test",
//         age: 50
//     }
// ]
// users.forEach(function(user) {
//     console.log(user) // {}
// })

/*
    name - текущий элемент массива

    arr.forEach(cb)
    callback функция переданная в метод forEach принимает три параметра
    1. item - текущий элемент
    2. index - индекс текущего элемента
    3. arr - сам массив, который перебираем
*/

// Задача. Пройтись по массиву чисел и вывести в консоль квадрат каждого. с помощью forEach
// const numbers = [10, 5, 18, 21, 5, 7]
// numbers.forEach(function(num) {
//     console.log(num**2)
// })


// Задача. Есть массив строк. Для каждой строки создать тег p в html. forEach
// const names = ["Nina", "Vlad", "Artem", "Olga", "Liudmyla"]
// const container = document.querySelector(".item")
// names.forEach(function(name) {
//     container.innerHTML += `<p>${name}</p>`
// })
/*
    1. <div class="item">   </div>.      <p>Nina</p>
    2.  <div class="item"> <p>Nina</p>  </div>.      = <p>Vlad</p>

    div = {
        innerText: "hello",
        innerHTML: "<p>Nina</p>"
    }
    div.innerHTML = <p>Vlad</p> // <div class="item"> <p>Vlad</p>  </div>
    div.innerHTML += <p>Nina</p> <p>Vlad</p> // <div class="item"><p>Nina</p> <p>Vlad</p>  </div>
*/


/*
    <h1>Hello World<h1>
        h1.innerText = "Привет мир"

    let num  = 10
    num = 15

    let name = "Arsen"
    name = "Artem"
    name += "Artem" // ArsenArtem

*/

// createElement() - создать элемент. append() -добавить 
// insertAdjacentHTML("beforeend", "<div></div>")
// innerHTML = 


// const title = document.querySelector("h1")
// title.innerText += "Привет" // HelloПривет  

/*
    title.innerText = title.innerText + "Привет"
*/


// Есть массив объектов products. Отобразить элементы в виде. используя forEach. innerHTML
// const products = [
//     {
//         name: "Молоко",
//         price: 500
//     },
//     {
//         name: "Гречка",
//         price: 600
//     },
//     {
//         name: "Масло",
//         price: 850
//     },
// ]
// // const container = document.querySelector(".item")

// products.forEach(function(product) {
//     document.body.innerHTML += `
//         <div class="product">
//             <h5>${product.name}</h5>
//             <p>${product.price}</p>
//         </div>
//     `
// })

/*
    elem.innerHTML += `
                    <div class="product">
                        <h5>Name</h5>
                        <p>price</p>
                    </div>
                    `
*/