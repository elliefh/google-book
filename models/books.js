const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ""
  },
  href: {
    type: String,
    default: "",
    unique: true
  },
  saved: {
    type: Boolean,
    default: false,
    required: true
  }
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
