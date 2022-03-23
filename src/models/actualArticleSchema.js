import mongoose from "mongoose";
const Schema = mongoose.Schema

const actualArticleSchema = new mongoose.Schema({
    articleTitle : {type: String, required: true},
    body : {type: String, required: true},
    author: {type: String, required: true},
    date: String,
    tags : Array,
    image : String,
    approved : {type: Boolean, required: true}
  })

  const Articles = mongoose.model("actualArticles", actualArticleSchema, "actualArticles")

  export default Articles