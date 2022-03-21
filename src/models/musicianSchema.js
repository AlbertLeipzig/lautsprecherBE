import mongoose from "mongoose";
const Schema = mongoose.Schema

const musicianSchema = new mongoose.Schema({
    fname : {type : String, required : true },
    lname : String,
    instrument: Array,
    style : Array,
    website : String,
    mail : String,
    socialMedia : String,
    bands : Array,
    image : String,
    approved : Boolean
  })

  const Musicians = mongoose.model("musicians", musicianSchema, "musicians")

  export default Musicians