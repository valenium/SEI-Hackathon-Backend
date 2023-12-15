const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQ0ZDE2ZTI5MWFmYjZkZTAwZDFiNzJlOWI5YThmNiIsInN1YiI6IjY1N2M2MWYyN2VjZDI4MDEwMWQzOGU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJBN4_bNTEALTJ6TX1yQ2fDjaHEF-ohbyHZgEQkdkCA'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

