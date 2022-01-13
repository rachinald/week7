const yargs = require("yargs");
const fs = require("fs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./utils/index.js");

const connection = require("./db/connection");

const command = yargs.argv._[0];

const app = async (args) => {
  console.log(args);
  try {
    if (command === "add") {
      await addMovie({ title: args.title, actor: args.actor });
    } else if (command === "list") {
      await listMovies();
    } else if (command === "update") {
      await updateMovie({ title: args.title, updateTitle: args.updateTitle });
    } else if (command === "delete") {
      await deleteMovie({ title: args.title });
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
