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

export default router;