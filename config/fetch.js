import options from "./config.js";

const id = 854648;
fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

