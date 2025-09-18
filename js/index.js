"use strict";

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start() {
        let input = "";
        while (input === "" || input === null || isNaN(+input) || +input < 0) {
            input = prompt("сколько фильмов вы уже посмотрели?", "");

        }
        this.count = +input;
    },

    rememberMyFilms(filmCount) {
        for (let i = 0; i < filmCount; i++) {
            let movie = "";
            do {
                movie = prompt("Один из последних просмотренных фильмов?")
                if (movie !== null) {
                    movie = movie.trim();
                }
                if (movie === "" || movie === null) {
                    alert("Требуется ввести название фильма")
                }
            }
            while (movie === "" || movie === null)
            let rate = prompt("на сколько его оцените?")

            this.movies[movie] = rate;
        }
    },

    detectViewerLevel(){
        if (this.count < 2) {
            alert("Просмотренно довольно мало фильмов");
        }
        else if (this.count >=2 && this.count < 5) {
            alert("Вы классический зритель");
        }
        else {
            alert("Вы киноман");
        }
    },

    showMyDb(){
        if (this.private === false){
            console.log(this);
        }
    },

    writeYourGenres(){
        for (let i = 0; i < 3; i++) {
            let genre = "";
            while (genre === "" || genre === null) {
                genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
                if (genre !== null) {
                    genre = genre.trim();
                }
            }
            this.genres[i] = genre;
        }
    },

    showMyGenres(){
        this.genres.forEach((item, i, array) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        })
    },

    toggleVisibleMyDB(){
     this.private = !this.private;
}
}

personalMovieDb.start();
personalMovieDb.rememberMyFilms(2);
personalMovieDb.writeYourGenres()
personalMovieDb.detectViewerLevel();
personalMovieDb.showMyDb();
personalMovieDb.showMyGenres();
personalMovieDb.toggleVisibleMyDB();