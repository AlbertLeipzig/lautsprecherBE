import mongoose from "mongoose";
const Schema = mongoose.Schema

const concertSchema = new mongoose.Schema({
  address: Object,
  approved : {type: Boolean, required: true},
  bands : Array,
  concertTitle : {type : String, required : true },
  cost : {type: Number, required: true},
  date : {type: Object, required: true},
  duration : Number,
  image : String,
  musicians: Array,
  style: {type: Array, required: true},
  tickets : String,
  veranstaltungsort: String
}, {
    versionKey: false,
     timestamps: true
   }, {collection:"concerts"})

  const Concerts = mongoose.model("concerts", concertSchema, "concerts")

  export default Concerts