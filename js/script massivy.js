"use strict";

const arr = [1, 2, 3, 23, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr[99] = 0;
// console.log(arr.length);
// Свойства length - он состоит из последнего индекса +1
// console.log(arr);


// forEach - метод перебора массива, он включает в себя callback функцию
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);

// });

// pop - удаляет последний элемент из массива
// arr.pop();

// push - добавляет элемент в конец массива
// arr.push(10);


// console.log(arr);

//  для того чтобы перебрать массив можно использовать for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // Так же можно использовать for of
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// sort метод сортировки и сортирует только как строки
// products.sort();
// console.log(products.join('; '));

// Псевдомассив - структура с массивом одинакова, но у него не будет никаких методов
// ни forEach, str