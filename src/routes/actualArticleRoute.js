import express from "express";
const router = express.Router();
import {postActualArticle} from "../controllers/postActualArticle.js"
import ActualArticles from "../models/actualArticleSchema.js"
import Schema from "../models/actualArticleSchema.js"


router.post("/add", async (req, res) => {
  const article = {
    title : "",
    author : "",
    date : Date.now(),
    tags : [],
    body : "",
    image : "",
    approved : true
  }
  const newArticle = new Schema.ActualArticles(article)

  try {
    await newArticle.save( async (err, newArticleResult) => {
      console.log("New Article In")
      res.end("Yes, NEW ARTICLE CREATED")
    })
  }
  catch(err){
    console.log(err)
    res.end("NOT A NEW ARTICLE, SORRY")
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