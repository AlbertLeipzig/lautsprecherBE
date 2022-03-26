import express from "express";
const router = express.Router();
import {postActualArticle} from "../controllers/postActualArticle.js"
import ActualArticles from "../models/actualArticleSchema.js"
import Schema from "../models/actualArticleSchema.js"


router.post("/", async (req, res) => {
  const article = {
    approved : true,
    articleTitle : req.body.articleTitle,
    author : req.body.author,
    body : req.body.body,
    image : req.body.image,
    tags : req.body.tags
  }

  try {
    const newArticle = await ActualArticles.create(article)
    res.status(201).json(newArticle)
  }
  catch(err){
    console.log(err)
    res.sendStatus(400)
  }
})

router.get("/", async (req, res) => {
  try {
    const articles = await ActualArticles.find()
    res.json(articles)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.get("/:id", async (req, res) => {

  const id = req.params.id

  try {
    const articles = await ActualArticles.findOne({_id : id})
    res.json(articles)
    console.log(`You wanted the id ${id}`)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.delete("/:id", async (req, res) => {

  const id = req.params.id

  await ActualArticles.findByIdAndDelete(id)
  res.redirect("/")
});

router.patch("/:id", async (req, res) => {

  const id = req.params.id

  try{
    const article = await ActualArticles.findById(id)
    article.approved = req.body.approved || false
    article.articleTitle = req.body.articleTitle || article.articleTitle
    article.author = req.body.author || article.author
    article.body = req.body.body || article.body
    article.image = req.body.image || article.image
    article.tags = req.body.tags || article.tags

    const updatedArticle = await article.save()
    res.json(updatedArticle)
  }
  catch(err){
    res.status(400).send(err)
  }
});

export default router;