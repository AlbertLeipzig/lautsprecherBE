import mongoose from "mongoose";

const musicianSchema = new mongoose.Schema({
    fname : String,
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

  const Musician = mongoose.model("musician", musicianSchema, "musician")


  export default Musician