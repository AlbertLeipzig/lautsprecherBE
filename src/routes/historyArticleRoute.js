import express from "express";
const router = express.Router();
import {postHistoryArticle} from "../controllers/postHistoryArticle.js"
import HistoryArticle from "../models/historyArticleSchema.js"
import Schema from "../models/historyArticleSchema.js"


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

  try {
    const newArticle = await HistoryArticle.create(article)
    res.status(201).json(newArticle)
  }
  catch(err){
    console.log(err)
    res.sendStatus(400)
  }
})

router.get("/", async (req, res) => {
  try {
    const articles = await HistoryArticle.find()
    res.json(articles)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;