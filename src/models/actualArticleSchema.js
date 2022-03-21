import mongoose from "mongoose";
const Schema = mongoose.Schema

const actualArticleSchema = new mongoose.Schema({
    title : String,
    body : String,
    author: Array,
    date: String,
    tags : Array,
    image : String,
    approved : Boolean
  })

  const Articles = mongoose.model("actualArticles", actualArticleSchema, "actualArticles")

  export default Articles