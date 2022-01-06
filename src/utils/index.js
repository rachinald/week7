const fs = require("fs");

const addMovie = (movieArr, movieObj) => {
  try {
    movieArr.push(movieObj);
    const stringyObj = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", stringyObj);
  } catch (error) {
    console.log(error);
  }
};

const listMovies = () => {
  try {
    console.log(addMovie.movieArr);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  listMovies,
};
