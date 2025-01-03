// 1. Пользователь вводит имя фамилию. Необходимо создать функцию возвращающую строку вида
// «Привет, {имя} {фамилия}»

// function func(name, second_name){
//     return `Привет, ${name} ${second_name}`
// }
// let result = func('Илья', 'Толстенков')
// console.log(result)

// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное
// слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно,
// в верхний
// happy new year -> happy NEW year

// function func(str){
//     let arr = str.split(' ');
//     return arr.map(function upper(elem, index){
//         if(index % 2 != 0) return elem.toUpperCase()
//         else return elem
//     })
// }
// let result = func('happy new year')
// console.log(result.join(' '))

// 3. Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где
// каждое слово начинается с большого регистра
// hschool company -> Hschool Company

// function func(str){
//     let arr1 = str.split(' ')
//     let arr2 = []
//     for(let i = 0; i < arr1.length; i++){
//         arr2.push(arr1[i][0].toUpperCase() + arr1[i].slice(1, arr1[i].length))
//     }
//     return arr2
// }
// let result = func('hschool company')
// console.log(result.join(' '))

// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо отфильтровать
// значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

// function func(arr){
//     return arr.filter(function chet(elem){
//         if (elem.length == 2) return true
//         else return false
//     })
// }
// let result = func(["by", "belarus", "de", "ru", "germany"])
// console.log(result)

// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа.
// Функция возвращает true, если в массиве только числа и false в противном случае

// function func(arr){
//     return arr.every(function chet(elem){
//         if (!isNaN(elem)) return true
//         else return false
//     })
// }
// let result = func([1, 2, 3, 4, 'adas'])
// console.log(result)

// 6. На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения
// количества элементов массива

// let n = prompt('Введите количество элементов массива')
// function CreateArray(n){
//     let arr = []
//     for(let i = 0; i < n; i++){
//         arr.push(prompt('Введите элемент массива'))
//     }
//     return arr
// }
// let array = CreateArray(n)

// function CountElem(arr){
//     let count = 0
//     for(let i = 0; i < arr.length; i++)
//         count++
//     return count
// }
// let result = CountElem(array)
// console.log(array, result)

// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения суммы всех элементов массива. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую сумму всех элементов массива

// const arr = [1, 2, 3, 4, 5]
// function CheckNum(arr){
//     return arr.every(function check(elem){
//         if(!isNaN(elem)) return true
//         else return false
//     })
// }
// function Sum(arr){
//     return arr.reduce(function(sum, elem){
//         return sum+=elem
//     }, 0)
// }
// if(CheckNum(arr)) console.log(arr, Sum(arr))
// else console.log('No')

// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки.
// Вторая для получения суммы всех строчных элементов массива. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую конкатенацию всех строчных
// элементов массива

// const arr = ['AV', 'asdas', 'asdasd', 'asdasdad', 'asdad']
// function CheckStr(arr){
//     return arr.every(function check(elem){
//         if(isNaN(elem)) return true
//         else return false
//     })
// }
// function Sum(arr){
//     return arr.reduce(function(str, elem){
//         return str+=elem
//     }, '')
// }
// if(CheckStr(arr)) console.log(arr,  Sum(arr))
// else console.log('No')

// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения массива с удвоенными значенями каждого элемента. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив с удвоенными элементами

// const arr = [1, 2, 3, 4, 5]
// function CheckNum(arr){
//     return arr.every(function check(elem){
//         if(!isNaN(elem)) return true
//         else return false
//     })
// }
// function Double(arr){
//     return arr.map(function(elem){
//         return elem*=2
//     })
// }
// if(CheckNum(arr)) console.log(arr,  Double(arr))
// else console.log('No')

// 10. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения только четных элементов массива. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую массив с четными элементами массива

// const arr = [1, 2, 3, 4, 5]
// function CheckNum(arr){
//     return arr.every(function check(elem){
//         if(!isNaN(elem)) return true
//         else return false
//     })
// }
// function Chet(arr){
//     return arr.filter(function(elem){
//         if (elem % 2 == 0) return true
//         else return false
//     })
// }
// if(CheckNum(arr)) console.log(arr,  Chet(arr))
// else console.log('No')


// 11. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

// let n = Number(prompt('Введите число'));
// function func(n){
//     let factorial = 1
//     for(let i = 1; i <= n; i++){
//         factorial*=i
//     }
//     console.log(factorial)
// }
// func(n)

// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и
// false в противном случае

// let str = prompt('Введите строку')
// function func(str){
//     if(str == str.split('').reverse().join('')) return true
//     else return false
// }
// console.log(func(str))