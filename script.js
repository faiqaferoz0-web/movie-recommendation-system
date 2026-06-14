function recommendMovie(genre) {
    let movie = "";

    if (genre === "action") {
        movie = "Avengers: Endgame";
    }
    else if (genre === "comedy") {
        movie = "The Hangover";
    }
    else if (genre === "thriller") {
        movie = "Inception";
    }

    document.getElementById("result").innerHTML =
        `<h2>🎬 Recommended Movie: ${movie}</h2>`;
}


// Search Movies

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keyup", function () {

    let filter = searchBox.value.toLowerCase();

    let movies = document.querySelectorAll(".movie-row img");

    movies.forEach(movie => {

        let movieName = movie.alt.toLowerCase();

        if (movieName.includes(filter)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }

    });

});