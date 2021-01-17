const express = require("express");
const morgan = require("morgan");
const app = express();
const playStore = require("./playStore");

app.use(morgan("common"));

app.get("/apps", (req, res) => {
  const { sort, genres } = req.query;

  if (sort) {
    if (!["rating", "app"].includes(sort)) {
      return res.status(400).send("Sort must include rating or app");
    }
  }

  let results = apps.filter((app) => {
    app.genres.includes([
      "Action",
      "Puzzle",
      "Strategy",
      "Casual",
      "Arcade",
      "Card",
    ]);
  });

  if (sort) {
    results.sort((a, b) => {
      return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    });
  }

  res.json(results);
});
