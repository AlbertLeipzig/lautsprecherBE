import mongoose from "mongoose";
const Schema = mongoose.Schema

const bandSchema = new mongoose.Schema({
    approved : Boolean,
    bandName : {type: String, required: true},
    concerts: Array,
    image : String,
    mail : String,
    musicians : {type: Array, required: true},
    socialMedia : Object,
    style : Array,
    vorsitzender: {type: String, required: true},
    website : String
  })

  const Bands = mongoose.model("bands", bandSchema, "bands")

  export default Bands