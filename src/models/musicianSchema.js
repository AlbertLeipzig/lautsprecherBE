import mongoose from "mongoose";
const Schema = mongoose.Schema

const musicianSchema = new mongoose.Schema({
    fName : {type : String, required : true },
    lname : {type: String, required: true},
    mail : {type: String, required: true},
    bands : Array,
    date: Object,
    image : String,
    instruments: Array,
    password: {type: String, required: true},
    style : Array,
    website : String,
    socialMedia : Object,
    approved : {type: Boolean, required: true}
  })

  const Musicians = mongoose.model("musicians", musicianSchema, "musicians")

  export default Musicians