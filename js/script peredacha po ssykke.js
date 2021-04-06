"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Copy передает только ссылку на уже существующий обьект obj
// поэтому модифицируя нашу копию мы изменяем наш начальный объект
// copy.a = 10; изменяя что то внутри копий мы модифицируем наш изначальный объект
// такое поведение называется передача по ссылке
// console.log(copy);
// console.log(obj);



function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;

}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4

    }

};    

const newNumbers = copy(numbers);

newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// Пока мы работаем с поверхностными копиями

const add = {

    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); //Соединяем два объекта
// а самое главное что этой командой создали независимую копию поверхностного объекта

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
// создаем поверхностную копию массивов
const newArray = oldArray.slice();
// slice - метод уоторый позволяет просто скопировать старый массив 

newArray[1] = 'pogoda';
console.log(newArray);
console.log(oldArray);


// Метод поверхностной копии с ES6 и ES8, с помощью оператора разворота

// Разворот переменной с помощью троеточия ...
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'Livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];


console.log(internet);      

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};
// Используем спредоператор

const newObj = {...q};


