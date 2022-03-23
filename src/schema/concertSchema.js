import mongoose from "mongoose";

const concertSchema = new mongoose.Schema({
  approved : Boolean,
  band : Array,
  cost : Number,
  duration : Number,
  image : String,
  musician: Array,
  place : String,
  tickets : String,
  time : String,
  title : String,
  veranstaltungsort: String
  })

  export default concertSchema