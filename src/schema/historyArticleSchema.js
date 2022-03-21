import mongoose from "mongoose";

const historyArticleSchema = new mongoose.Schema({
    title : String,
    author : String,
    date : String,
    tags : Array,
    body : String,
    image : String,
    approved : Boolean
  })

  export default historyArticleSchema