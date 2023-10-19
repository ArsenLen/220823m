// Массивы и циклы
// const number = 100
// const arr = [] // пустой
// const names = ["Arsen", "Vlad", "Alina", "Artem"] // массив имен
// const array = ["Arsen", 100, ["Hello", "World"], number] // массив из разных типов данных
// console.log(array[1]) // обращаемся к числу 100 в массиве array
// // Вытащить Hello из массива array в консоли
// console.log(array[2][0]) // обращаемся к Hello внутри массива в массиве array
// console.log(array[0], array[1])
// const str = array[0][0]
// console.log(str)

// push() - метод добавления элемента в конец массива
// const numbers = [1, 2, 3, 4]
// numbers.push(10, 11, 12) // 5, 6, 7
// console.log(numbers) 

// const names = ["Vlad", "Iren", "Dmitrii"]
// const newLength = names.push("Arsen")
// console.log(newLength)
// // Задача. Добавить имя "Arsen" в массив names

// // pop() - удаляет элемент с конца массива
// const deletedName = names.pop() 
// console.log(deletedName) // ["Vlad", "Iren", "Dmitrii"]

// array[2] = [Hello, World]

// Задача. Попросить пользователя ввести 2 числа. Добавить введенные числа в массив numbers. 
// доступа к массиву нет))
// const numbers = []
// const num1 = +prompt("Введите число 1")
// const num2 = +prompt("Введите число 2")

// numbers.push(num1, num2)
// console.log(numbers)


// Поменять буквы в слове задом-наперед
// const str = "hello"
// const reversedStr = str.split("").reverse() // ["h", "e", "l", "l", "o"] --> ["o", "l", "l", "e", "h"]
// console.log(reversedStr.join(""))
/* 
    Массив - это упорядоченная коллекция данных, которая может хранить
разные элементы - числа, строки, объекты, другие массивы и тд 

    Счет в массиве начинается с нуля
    Элементов может быть сколько угодно
    Массив - это нумерованный список

    Каждому элементу массива выдается нумерованная ячейка, порядковый номер
Значение элемента в массиве можно вытащить по его индексу

    Длина массива - это количество элементов в нем
 */



// Цикл
/*
    цикл - это повторяющаяся последовательность действий, которые нужно сделать

    for(инициализация; условие; шаг) {
        делаем что-то // тело цикла
    }
    1. инициализация - задаем начальное счетчика   || с понедельника  
    2. условие - условие по которому выполняется цикл || до пятницы
    3. шаг//завершающая операция - как часто нужно выполнять действие  || каждый день
    4. тело цикла - действие, которое должно повторяться || идти на занятие в 9:30
*/
// Задача. Вывести в консоли построчно имена из массива names
const names = ["Vlad", "Iren", "Dmitrii"]
console.log(names[0]) // Vlad
console.log(names[1]) // Iren
console.log(names[2]) // Dmitrii

for(let i = 0; i > 3; i++) {
    console.log(names[i])
}
/*
    number % 3 === 0 - кратно трем

    i++ - увеличение переменной i на 1
    1. i = i + 1
    2. i += 1
    3. i++

    Цикл по итерациям 

    1. i = 0, i < 3 - true, выполняем действие console.log(names[0]), i++, i = 1
    2. i = 1, 1 < 3 - true, выполняем действие console.log(names[1]), i++, i = 2
    3. i = 2, 2 < 3 - true, выполняем действие console.log(names[2]), i++, i = 3
    4. i = 3, 3 < 3 - false, выход из цикла
*/

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// Задача. Вывести числа от 0 до 5
for(let i = 0; i <= 100; i++) {
    console.log(i)
}

/*
    i = 0

    1. i = 0; 0 < 5 - true, console.log(0), i++, i = 1
    2. i = 1; 1 < 5 - true, console.log(1), i++, i = 2
    3. i = 2; 2 < 5 - true, console.log(2), i++, i = 3
    4. i = 3; 3 < 5 - true, console.log(3), i++, i = 4
    5. i = 4; 4 < 5 - true, console.log(4), i+=, i = 5
    6. i = 5; 5 < 5 - false, Выход из цикла 
*/