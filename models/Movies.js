const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  id: Number,
  name: String,
});

// const MovieSchema = new Schema({
//   adult: Boolean,
//   backdrop_path: String,
//   genre_ids: [{GenreSchema}],
//   id: Number,
//   original_language: String,
//   title: String,
//   overview: String,
//   popularity: Number,
//   poster_path: String,
//   release_date: String,
//   vote_average: Number,
//   vote_count: Number,
// });

module.exports = mongoose.model("Movies", MovieSchema);
