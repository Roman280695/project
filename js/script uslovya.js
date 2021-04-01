"use strict";

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('error');
}

if (4 == 4) {
    console.log('Ok');
} else {
    console.log('error');
}

if (4) {
    console.log('Ok');
} else {
    console.log('error');
}

// const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

const num = 50;

(num === 50) ?  console.log('Ok') :  console.log('Error');
//  4 + 4 бинарный аргуиент
//  + 4 унарный аргумент 


const num = 50;

switch (num) {
    case 49:
        console.log ('Neverno');
        break;
    case 100: 
        console.log ('Neverno');
         break;
    case 55: 
         console.log ('Verno');
          break;
    default:
        console.log ('Ne v etot raz');
        break;
    
}

const num = '50';

switch (num) {
    case '49':
        console.log ('Neverno');
        break;
    case '100': 
        console.log ('Neverno');
         break;
    case '50': 
         console.log ('Verno');
          break;
    default:
        console.log ('Ne v etot raz');
        break;
    
}