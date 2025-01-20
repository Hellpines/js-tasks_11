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

// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и
// false в противном случае

// const str = 'мука';
// function Anagramma(word){
//     const arr = str.split('');
//     return arr.every(function func(elem){
//         if (word.includes(elem) && (word.split('').length == arr.length)) return true
//         else return false
//     })
// }
// let result = Anagramma('уамк')
// console.log(result)

// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для поиска максимального значения в массиве. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую максимальное значение массива

// const arr = [1, 2, 3, 4, 5]

// function Numbers(arr){
//     return arr.every(function func(elem){
//         if (!isNaN(elem)) return true
//         else return false
//     })
// }

// function Max(arr){
//     return arr.reduce(function maximum(max, elem){
//         if (elem > max) return max = elem
//         else return max
//     }, arr[0])
// }

// if(Numbers(arr)){
//     console.log(Max(arr))
// }
// else console.log('No')

// 15. На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для получения произведения всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую произведение
// всех элементов массива

// let n = prompt('Введите количество элементов массива')
// function CreateArray(n){
//     let arr = []
//     for(let i = 0; i < n; i++){
//         arr.push(prompt('Введите элемент массива'))
//     }
//     return arr
// }
// let array = CreateArray(n)

// function Numbers(array){
//     return array.every(function func(elem){
//         if (!isNaN(elem)) return true
//         else return false
//     })
// }

// function Proiz(array){
//     return array.reduce(function proiz(res, elem){
//         return res*=elem
//     }, 1)
// }

// if (Numbers(array)) console.log(Proiz(array))
// else console.log('No')

// 16. На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в
// квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат

// let n = prompt('Введите количество элементов массива')
// function CreateArray(n){
//     let arr = []
//     for(let i = 0; i < n; i++){
//         arr.push(prompt('Введите элемент массива'))
//     }
//     return arr
// }
// let array = CreateArray(n)

// function Numbers(array){
//     return array.every(function func(elem){
//         if (!isNaN(elem)) return true
//         else return false
//     })
// }

// function NewArray(array){
//     let arr = array.filter(function filt(elem)
//     {if (elem % 2 == 0) return true 
//         else return false}
//     )
//     return arr.map(function ArrayNew(elem){
//         return elem**2
//     })
// }

// if (Numbers(array)) console.log(NewArray(array))
// else console.log('No')

// 17. Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить
// строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование
// регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

// const str = prompt('Введите строку').toLowerCase();

// function func(str){
//     const arr = str.split('');
//     return arr.map(function(elem, index){
//         if(index % 2 == 0) return elem.toUpperCase()
//         else return elem.toLowerCase()
//     })
// }

// const result = func(str)
// console.log(result.join(''))

// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна
// преобразовать строку в формат “xxxx-xx-xx”. 

// const data = prompt('Введите дату в формате xx/xx/xxxx');

// function func(data){
//     return data.split('/').reverse().join('-');
// }

// const result = func(data);
// console.log(result)






///////////////////////////////////////
// 1. Создать функцию, которая принимает массив чисел и возвращает их среднее арифметическое.
// Входные: average([1, 2, 3, 4]) → Результат: 2.5

// const average = (arr) =>{
//     const result = arr.reduce((sum, elem) => sum+=elem, 0);
//     const avg = result / arr.length;
//     return avg;
// }
// console.log(average([1, 2, 3, 4]));

// 2. Написать функцию, которая принимает строку и возвращает ее в обратном порядке.
// Входные: reverseString('hello') → Результат: 'olleh'

// const reverseString = (word) => word.split('').reverse().join('');
// console.log(reverseString('hello'));

// 3. Написать функцию, которая принимает одно число n и с помощью цикла for находит такое число x,
// что 𝑥
// 2 = 𝑛. Если точного целого корня не существует, функция должна вернуть -1.
// Входные: findSquareRoot(16) → Результат: 4
// Входные: findSquareRoot(25) → Результат: 5
// Входные: findSquareRoot(10) → Результат: -1
// Входные: findSquareRoot(1) → Результат: 1

// const findSquareRoot = (n) =>{
//     let x = 0;
//     for(let i = 0; i < n; i++){
//         if(i * i == n){
//             x = i;
//             break;
//         }
//         else x = -1;
//     }
//     return x;
// }
// console.log(findSquareRoot(25));

// 4. Написать функцию, которая принимает массив чисел и возвращает максимальную разницу между
// соседними элементами.
// Входные: maxDifference([1, 3, 6, 10]) → Результат: 4

// const maxDifference = (arr) => {
//     let max = arr[0] - arr[1];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i+1] - arr[i] > max) max = arr[i+1] - arr[i];
//     }
//     return max;
// }
// console.log(maxDifference([1, 10, 6, 14]));

// 5. Создать функцию, которая принимает строку и возвращает ее без дублирующихся символов.
// Входные: removeDuplicates('hello') → Результат: 'helo’

// const removeDuplicates = (word) =>{
//     const arr = word.split('');
//     let filt = arr.reduce(function(str, elem){
//         if(!str.includes(elem)) return str + elem;
//         else return str;
//     },'')
//     return filt;
// }
// console.log(removeDuplicates('hello'));

// 6. Написать функцию, которая принимает массив чисел и возвращает true, если хотя бы одно из них
// делится на 3.
// Входные: hasMultipleOfThree([1, 4, 6]) → Результат: true

// const hasMultipleOfThree = (arr) => arr.some((elem) => elem % 3 == 0 ? true : false)
// console.log(hasMultipleOfThree([1, 4, 6]))

// 7. Создать функцию, которая принимает массив строк и возвращает массив только тех, которые
// заканчиваются на заданный символ.
// Входные: endsWith(['hello', 'world', 'js'], 'd') → Результат: ['world’]

// const endsWith = (arr, letter) => arr.filter((elem) => elem.endsWith(letter) ? true : false)
// console.log(endsWith(['hello', 'world', 'js'], 'd'))

// 8. Написать функцию, которая принимает массив чисел и возвращает true, если числа идут в
// порядке возрастания.
// Входные: isAscending([1, 2, 3]) → Результат: true

// const isAscending = (arr) => arr.every((elem, index) => index === arr.length - 1 ? true : elem < arr[index+1] ? true : false)
// console.log(isAscending([1, 2, 3]))

// 9. Написать функцию, которая принимает строку и символ и возвращает новый объект с количеством
// вхождений символа и индексами, где он встречается.
// Входные: charStats('hello', 'l') → Результат: {count: 2, indices: [2, 3]}

// const charStats = (word, letter) =>{
//     let count = 0;
//     let indices = [];
//     let obj = {};
//     for(let i = 0; i < word.length; i++){
//         if(word[i] == (letter)){
//             count++;
//             indices.push(i);
//         }
//     }
//     obj.count = count;
//     obj.indices = indices;
//     return obj;
// }
// console.log(charStats('hello', 'l'));

// 10. Написать функцию, которая принимает массив чисел и возвращает его в виде строки, где числа
// разделены тире.
// Входные: joinWithDash([1, 2, 3]) → Результат: '1-2-3’

// const joinWithDash = (arr) => arr.join('-');
// console.log(joinWithDash([1, 2, 3]));

// 11. Создать функцию, которая принимает строку и возвращает true, если она состоит из уникальных
// символов.
// Входные: hasUniqueChars('abc') → Результат: true

// const hasUniqueChars = (word) => word.split('').every((elem, index) => word.indexOf(elem) == index ? true : false);
// console.log(hasUniqueChars('abc'));

// 12. Написать функцию, которая принимает массив чисел и возвращает разницу между максимальным
// и минимальным элементами.
// Входные: maxMinDifference([1, 2, 3, 4]) → Результат: 3

// const maxMinDifference = (arr) =>{
//     let max = arr[0];
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max) max = arr[i];
//         else if(arr[i] < min) min = arr[i];
//     }
//     return max - min
// }
// console.log(maxMinDifference([1, 2, 3, 4]));

// 13. Создать функцию, которая принимает строку и возвращает true, если в строке больше гласных, чем
// согласных.
// Входные: moreVowels('hello') → Результат: false

// const moreVowels = (word) =>{
//     const vowels = 'aeuoi';
//     let count1 = 0;
//     let count2 = 0;
//     for(let i = 0; i < word.length; i++){
//         if(vowels.includes(word[i])) count1+=1;
//         else count2+=1;
//     }
//     return count1 > count2;
// }
// console.log(moreVowels('hello'));

// 14. Написать функцию, которая принимает массив строк и возвращает самую длинную строку.
// Входные: longestString(['a', 'abcd', 'abc']) → Результат: 'abcd’

// const longestString = (arr) =>{
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > max.length) max = arr[i];
//     }
//     return max;
// }
// console.log(longestString(['a', 'abcd', 'abc']));

// 15. Написать функцию, которая принимает объект и возвращает массив всех уникальных значений.
// Входные: uniqueObjectValues({a: 1, b: 2, c: 1}) → Результат: [1, 2]

// const uniqueObjectValues = (obj) => Object.values(obj).filter((elem, index) => Object.values(obj).indexOf(elem) === index);
// console.log(uniqueObjectValues({a: 1, b: 2, c: 1}));

// 16. Создать функцию, которая принимает массив чисел и возвращает true, если сумма четных чисел
// равна сумме нечетных.
// Входные: isBalanced([2, 4, 1, 5]) → Результат: true

// const isBalanced = (arr) => {
//     let nechet = 0;
//     let chet = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0) chet++;
//         else nechet++;
//     }
//     return chet == nechet;
// }
// console.log(isBalanced([2, 4, 1, 5]));

// 17. Создать функцию, которая принимает массив чисел и возвращает индекс самого большого
// значения.
// Входные: maxIndex([1, 3, 2]) → Результат: 1

// const maxIndex = (arr) =>{
//     let max = arr[0];
//     let result = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max) {
//             max = arr[i];
//             result = i;
//         }
//     }
//     return result;
// }
// console.log(maxIndex([1, 3, 2]));