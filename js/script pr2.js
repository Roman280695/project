"use strict";

let num = 50;

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколкьо оцените его?', ''),
//       c = prompt('Один из последнихпросмотренных фильмов?', ''),
//       d = prompt('На сколкьо оцените его?', '');


//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;


 for ( let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколкьо оцените его?', '');


    if (a !=null && b !=null && a != '' && b !='' && a.length <50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }     
    
 }  
 
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

 
console.log(personalMovieDB); 

