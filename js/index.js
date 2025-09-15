"use strict";

let numbersOfFilms;

function start() {
    let input = "";
    while (input === "" || input === null || isNaN(+input) || +input < 0) {
        input = prompt("сколько фильмов вы уже посмотрели?", "");

    }
    numbersOfFilms = +input;
}

start();


const personalMovieDb = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

rememberMyFilms(2);

function rememberMyFilms(filmCount){
    for (let i = 0; i < filmCount; i++) {
        let movie = "";
        do {
            movie = prompt("Один из последних просмотренных фильмов?").trim()
            if (movie === "" || movie === null) {
                alert("Требуется ввести название фильма")
            }
        }
        while (movie === "" || movie === null)
        let rate = prompt("на сколько его оцените?")

        personalMovieDb.movies[movie] = rate;
    }
}

function detectViewerLevel() {
    if (personalMovieDb.count < 2) {
        alert("Просмотренно довольно мало фильмов");
    }
    else if (personalMovieDb.count >=2 && personalMovieDb.count < 5) {
        alert("Вы классический зритель");
    }
    else {
        alert("Вы киноман");
    }

}

function showMyDb (isHidden){
    if (isHidden === false){
        console.log(personalMovieDb);
    }
}

function writeYourGenres(){
    for (let i = 0; i < 3; i++) {
       personalMovieDb.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}
writeYourGenres()
detectViewerLevel();
showMyDb(personalMovieDb.private);