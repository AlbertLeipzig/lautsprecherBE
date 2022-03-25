import mongoose from "mongoose";
const Schema = mongoose.Schema

const actualArticleSchema = new mongoose.Schema({
    approved : {type: Boolean, required: true},
    articleTitle : {type: String, required: true},
    author: {type: String, required: true},
    body : {type: Array, required: true},
    image : Array,
    tags : Array
  }, {
    versionKey: false,
     timestamps: true
   }, {collection:"actualArticles"})

  const Articles = mongoose.model("actualArticles", actualArticleSchema, "actualArticles")

  export default Articles