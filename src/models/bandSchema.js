import mongoose from "mongoose";
const Schema = mongoose.Schema

const bandSchema = new mongoose.Schema({
    bandName : String,
    musicians : Array,
    style : Array,
    website : String,
    mail : String,
    socialMedia : String,
    image : String,
    approved : Boolean
  })

  const Bands = mongoose.model("bands", bandSchema, "bands")

  export default Bands