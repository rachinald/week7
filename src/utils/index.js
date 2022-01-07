const fs = require("fs");

const addMovie = async (collection, movieObj) => {
  try {
    await collection.insertOne(movieObj);
    console.log(`Successfully added ${movieObj.title}.`);
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async (collection) => {
  try {
    console.log(await collection.find({}).toArray());
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (collection, updateObj) => {
  await collection.updateOne(
    { title: updateObj.title },
    { $set: { title: updateObj.updateValue } }
    // { title: "1984" },
    // { $set: { title: "black swan" } }
  );
};

const deleteMovie = async (collection, movieObj) => {
  try {
    await collection.deleteOne(movieObj);
    console.log(`Successfully deleted ${movieObj.title}.`);
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
