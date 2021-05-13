const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

//GET ALL ARTICLES
router.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//ADD NEW ARTICLE
router.post("/add", (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    authorname: req.body.authorname,
  });

  newArticle
    .save()
    .then(() => res.json("You made a new post!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//FIND ARTICLE BY ID
router.get("/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//FIND ARTICLE BY ID AND UPDATE
router.put("/update/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => {
      article.title = req.body.title;
      article.article = req.body.article;
      article.authorname = req.body.authorname;

      article
        .save()
        .then(() => res.json("UPDATED successfully"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//FIND ARTICLE BY ID AND DELETE
router.delete("/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article is DELETED Successfully"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
