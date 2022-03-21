import mongoose from "mongoose";
const Schema = mongoose.Schema

const historyArticleSchema = new mongoose.Schema({
    title : String,
    body : String,
    author: Array,
    date: String,
    tags : Array,
    image : String,
    approved : Boolean
  })

  const HistoryArticles = mongoose.model("historyArticles", historyArticleSchema, "historyArticles")

  export default HistoryArticles