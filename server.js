const express = require("express");

const books = require("./book.json");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "This is the book API, try to fetch data for any book, with given API struure"
  );
});

app.get("/books", (req, res) => {
  res.json(books);
});

/*
 {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "name": "Things Fall Apart",
        "year": 1958
    },
*/

app.get("/books/:name", (req, res) => {
  const { name } = req.params;

  const book = books.find((book) => book.name == name);
  res.json(book);
  console.log(book);
});

app.listen(8000, () => {
  console.log("Server is started at Port 8000");
});
