const fs = require("fs");
const Movie = require("../models/models");
const mongoose = require("mongoose");

const addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async () => {
  try {
    console.log(await Movie.find({}));
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (updatedMovie) => {
  const movie = await Movie.findOneAndUpdate(
    { title: updatedMovie.title },
    { title: updatedMovie.updateTitle },
    { new: true }
  );
  console.log(`${updatedMovie.title} has been updated to ${movie.title}`);
};

const deleteMovie = async (movieTitle) => {
  console.log(movieTitle);
  try {
    await Movie.deleteOne(movieTitle);
    console.log(`Successfully deleted.`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
};
