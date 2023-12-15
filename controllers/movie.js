const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQ0ZDE2ZTI5MWFmYjZkZTAwZDFiNzJlOWI5YThmNiIsInN1YiI6IjY1N2M2MWYyN2VjZDI4MDEwMWQzOGU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJBN4_bNTEALTJ6TX1yQ2fDjaHEF-ohbyHZgEQkdkCA'
    }
  };

  const api = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));

const db = require("../models")

module.exports = {
    index,
    show
}

async function index(req,res,next) {
    try {     
        const response = await fetch(api, options)
        const data = await response.json()
        console.log(data)

        const movieData = data.results.map(movie => {
            return {
                id: movie.id,
                title: movie.title,
                backdropPath: movie.backdrop_path,
                genre: movie.genre_ids,
                overview: movie.overview,
                popularity: movie.popularity,
                poster: movie.poster_path,
                releaseDate: movie.release_date,
                voteAverage: movie.vote_average,
                voteCount: movie.vote_count
            }
        })
        res.json(movieData)
    } catch(err) {
        res.status(400).json
        console.log(err)
    }
}

async function show(req,res,next) {
}

index()