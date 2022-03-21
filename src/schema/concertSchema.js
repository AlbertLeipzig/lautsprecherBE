import mongoose from "mongoose";

const concertSchema = new mongoose.Schema({
    title : String,
    band : Array,
    musician: Array,
    place : String,
    time : String,
    duration : Number,
    cost : Number,
    tickets : String,
    image : String,
    approved : Boolean
  })

  export default concertSchema