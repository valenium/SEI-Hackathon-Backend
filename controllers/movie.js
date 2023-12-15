const config = require("../config/index")
const db = require("../models")

module.exports = {
    index,
    show
}

async function index() {
    try {     
        const response = await fetch(config.API_KEY, config.options)
        const data = await response.json()

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
        response.json(movieData)
    } catch(err) {
        console.log(err)
        response.status(400).json({error: err.message})
    }
}

async function show(req,res,next) {
    try{

    }catch(err){

    }
}