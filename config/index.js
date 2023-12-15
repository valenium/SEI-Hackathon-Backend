const { TMDB_BEARER } = process.env

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_BEARER}`
    }
  };

const API_KEY = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

module.exports = {
    API_KEY,
    options
}