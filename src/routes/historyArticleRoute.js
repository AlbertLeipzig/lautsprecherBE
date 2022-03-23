import express from "express";
const router = express.Router();
import {postHistoryArticle} from "../controllers/postHistoryArticle.js"
import HistoryArticles from "../models/historyArticleSchema.js"
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

  const newHistoryArticle = new Schema.HistoryArticle(article)

  try {
    await HistoryArticle.create(req.body)
  }
  catch(err){
    console.log(err)
  }
})

router.get("/", async (req, res) => {
  try {
    const articles = await HistoryArticles.find()
    res.json(articles)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;