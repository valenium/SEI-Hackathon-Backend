const config = require("../config/index")
const db = require("../models")

async function fetchMovieDetails(id){
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,config.options)
        if (response.ok) {
            const movieDetails = await response.json()
            return movieDetails
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    index,
    show
}

async function index(req,res) {
    try {     
        const response = await fetch(config.API_KEY, config.options)

        if (response.ok) {
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
            res.status(200).json(movieData)
        }
    } catch(err) {
        console.log(err)
        res.status(400).json({error: err.message})
    }
}

async function show(req,res,next) {
    try{
        const movieId = req.params.id
        console.log('movie ID', movieId)
        const movie = await fetchMovieDetails(movieId)
        console.log('show movie', movie)
            res.status(200).json(movie)
    }catch(err){
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}