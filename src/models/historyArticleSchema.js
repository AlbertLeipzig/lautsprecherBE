import mongoose from "mongoose";
const Schema = mongoose.Schema

const historyArticleSchema = new mongoose.Schema({
    approved : {type: Boolean, required: true},
    articleTitle : { type: String, required: true},
    author: {type: String, required: true},
    body : {type: Array, required: true},
    image : Array,
    tags : Array
  }, {
    versionKey: false,
     timestamps: true
   }, {collection:"historyArticles"})

  const HistoryArticles = mongoose.model("historyArticles", historyArticleSchema, "historyArticles")

  export default HistoryArticles