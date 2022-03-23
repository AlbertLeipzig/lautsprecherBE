import mongoose from "mongoose";
const Schema = mongoose.Schema

const historyArticleSchema = new mongoose.Schema({
    title : { type: String, required: true},
    body : {type: String, required: true},
    author: {type: Array, required: true},
    date: {type: Object, required: true},
    tags : Array,
    image : String,
    approved : {type: Boolean, required: true}
  })

  const HistoryArticles = mongoose.model("historyArticles", historyArticleSchema, "historyArticles")

  export default HistoryArticles