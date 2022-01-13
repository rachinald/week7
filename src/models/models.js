// model = construction of the data and also an object

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  actor: {
    type: String,
    required: true,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);

// has to be a capital letter because the object is a class
module.exports = Movie;
