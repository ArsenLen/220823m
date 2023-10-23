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
// const names = ["Vlad", "Iren", "Dmitrii"]
// console.log(names[0]) // Vlad
// console.log(names[1]) // Iren
// console.log(names[2]) // Dmitrii

// for(let i = 0; i > 3; i++) {
//     console.log(names[i])
// }
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
// for(let i = 0; i <= 100; i++) {
//     console.log(i)
// }

/*
    i = 0

    1. i = 0; 0 < 5 - true, console.log(0), i++, i = 1
    2. i = 1; 1 < 5 - true, console.log(1), i++, i = 2
    3. i = 2; 2 < 5 - true, console.log(2), i++, i = 3
    4. i = 3; 3 < 5 - true, console.log(3), i++, i = 4
    5. i = 4; 4 < 5 - true, console.log(4), i+=, i = 5
    6. i = 5; 5 < 5 - false, Выход из цикла 
*/

// Задача. Вывести в консоли все имена из массива names с добавлением "Привет, {name}"
// const names = ["Arsen", "Vlad", "Olga", "Irina", "Dmitrii", "Artem", "Alina"]


// for(let i = 0; i < names.length; i++) {
//     console.log(`Привет, ${names[i]}`)
// }
/*
    names.length - количество элементов в массиве, длина массива

    break - остановить выполнение цикла
    continue - продолжить выполнение цикла

    i = 0. names.length = 6
    
    1. i = 0; 0 < 6 - true, console.log(`Привет ${names[0]}`) // привет, Арсен. i++, 1
    2. i = 1; 1 < 6 - true, console.log(`Привет ${names[1]}`) // привет, Vlad. i++, 2
    3. i = 2; 2 < 6 - true, console.log(`Привет ${names[2]}`) // привет, Olga, i++, 3
    4. i = 3; 3 < 6 - true, console.log(`Привет ${names[3]}`) // привет, Irina, i++, 4
    5. i = 4; 4 < 6 - true, console.log(`Привет ${names[4]}`) // Привет, Dmitrii, i++, 5
    6. i = 5; 5 < 6 - true, console.log(`Привет ${names[5]}`) // Привет, Artem, i++, 6
    7. i = 6; 6 < 6 - false. ВЫХОД ИЗ ЦИКЛА
*/

/*
    let array = [1, 2, 3, 4, 5]
    array.push(10, [1, 2])
    array = "Arsen" - можно

    const array = [1, 2, 3, 4, 5]
    array.push(10, [1, 2])
    array = "Arsen" - нельзя

    console.log(`Привет, ${names[0]}`)
    console.log(`Привет, ${names[1]}`)
    console.log(`Привет, ${names[2]}`)
    console.log(`Привет, ${names[3]}`)
*/

/*
    degree = 20
    if(degree > 15) {
        делаем только если переменная degree = 15
    }
*/

// Есть массив numbers. Нужно вывести в консоль только положительные числа из этого массива
// const numbers = [-100, 0, 50, -20, 0, 15, 25, -40] // 50, 15, 25
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         console.log(numbers[i])
//     }
// }

/*
    if(numbers[0] > 0) {
        console.log(numbers[0])
    }

    if(numbers[1] > 0) {
        console.log(numbers[1])
    }

    if(numbers[2] > 0) {
        console.log(numbers[2])
    }
*/

// Задача. Есть массив nubmers, нужно вывести только четные числа
// const numbers = [10, 17, 11, 21, 40, 501, 50, 46]
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 0) {
//         console.log(numbers[i])
//     }
// } 
/*
    
    if(numbers[0] % 2 == 0) {

    }

    Если число при делении на 2 дает 0, то оно четное
*/


// Задача. Есть массив чисел. Нужно найти сумму всех чисел
// const numbers = [10, 17, 11, 21, 40, 501, 50, 46]
// let sum = 0
// for(let i = 0; i < numbers.length; i++) {
    
//     sum = sum + numbers[i]
// }
// console.log(sum) // сумма

/*
    i = 0; sum = 0; numbers.length = 8
    
    1. i = 0, 0 < 8 - true, sum = 0 + numbers[0], sum = 0 + 10; sum = 10, i++
    2. i = 1, 1 < 8 - true, sum = 10 + numbers[1], sum = 10 + 17; sum = 27, i++
    3. i = 2, 2 < 8 - true, sum = 27 + numbers[2], sum = 27 + 11, sum = 38, i++
    4. i = 3, 3 < 8 - true, sum = 38 + numbers[3], sum = 38 + 21, sum = 59, i++
    5. i = 4, 4 < 8 - true, sum = 59 + numbers[4], sum = 59 + 40, sum = 99, i++
*/

// Задача. Есть массив numbers. Нужно посчитать сумму четных чисел в массиве. 
// const numbers = [10, 17, 11, 21, 40, 501, 50, 46]
// let sum = 0
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 1) {
//         sum = sum + numbers[i]
//     }
// }
// console.log(sum) 

/*
    10 % 2 == 0
    11 % 2 == 1

    15 % 2 = 1
*/

// Задача. Есть массив numbers. Нужно посчитать сумму четных и нечетных чисел в массиве. 
// и получить разницу между ними (от большего отнять меньшее)
// const numbers = [10, 17, 11, 21, 40, 501, 50, 46]
// let sumOdd = 0
// let sumEven = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 1) {
//         sumOdd = sumOdd + numbers[i]
//     } else {
//         sumEven = sumEven + numbers[i]
//     }
// }
// const sumFinal = sumEven - sumOdd
// if(sumEven > sumOdd) {
//     sumEven - sumOdd
// } else {
//     sumOdd - sumEven
// }