"use strict";

let numbersOfFilms;

numbersOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "0");

const personalMovieDb = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for (let i = 0; i < numbersOfFilms; i++) {
    let movie = prompt("Один из последних просмотренных фильмов?")
    let rate = prompt("на сколько его оцените?")

    personalMovieDb.movies[movie] = rate;
}

console.log(personalMovieDb);