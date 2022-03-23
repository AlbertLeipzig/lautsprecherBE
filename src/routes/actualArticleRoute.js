import express from "express";
const router = express.Router();
import {postActualArticle} from "../controllers/postActualArticle.js"
import ActualArticles from "../models/actualArticleSchema.js"
import Schema from "../models/actualArticleSchema.js"


router.post("/add", async (req, res) => {
  const article = {
    articleTitle : req.body.articleTitle,
    author : req.body.author,
    date : Date.now(),
    tags : req.body.tags,
    body : req.body.body,
    image : req.body.image,
    approved : true
  }

  const newArticle = new Schema.ActualArticles(article)

  try {
    await ActualArticles.create(req.body)
  }
  catch(err){
    console.log(err)
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