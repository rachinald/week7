const yargs = require("yargs");
const fs = require("fs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./utils/index.js");

const connection = require("./db/connection");

const command = process.argv[2];

const app = async (args) => {
  console.log(args);
  try {
    if (command === "add") {
      const movieObj = { title: args.title, actor: args.actor };
      await connection(addMovie, movieObj);
    } else if (command === "list") {
      await connection(listMovies);
    } else if (command === "update") {
      const updateObj = {
        title: args.title,
        updateValue: args.updateValue,
        // title: "hulk",
        // updateValue: "1984",
      };
      console.log(updateObj);
      await connection(updateMovie, updateObj);
    } else if (command === "delete") {
      const deleteM = { title: args.title };
      await connection(deleteMovie, deleteM);
    }

    // } else if (process.argv[2] === 'list') {
    //     listMovies();
    // } else if (process.argv[2] === 'update') {
    //     updateMovie(movieArr,
    //                 {title: yargs.argv.title, actor: yargs.argv.actor},
    //                 {title: yargs.argv.newTitle, actor: yargs.argv.newActor});
    // } else if (process.argv[2] === 'delete') {
    //     deleteMovie(movieArr, {title: yargs.argv.title, actor: yargs.argv.actor})
    // }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
