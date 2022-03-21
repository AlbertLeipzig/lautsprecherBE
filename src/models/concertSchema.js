import mongoose from "mongoose";
const Schema = mongoose.Schema

const concertSchema = new mongoose.Schema({
    title : {type : String, required : true },
    band : Array,
    style: Array,
    place : String,
    time : String,
    duration : String,
    cost : Number,
    tickets : String,
    image : String,
    approved : Boolean
  })

  const Concerts = mongoose.model("concerts", concertSchema, "concerts")

  export default Concerts