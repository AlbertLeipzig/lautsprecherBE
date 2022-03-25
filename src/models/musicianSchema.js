import mongoose from "mongoose";
const Schema = mongoose.Schema

const musicianSchema = new mongoose.Schema({
    approved : {type: Boolean, required: true},
    fName : {type : String, required : true },
    lName : {type: String, required: true},
    mail : {type: String, required: true},
    bands : Array,
    image : String,
    instruments: Array,
    style : Array,
    website : String,
    socialMedia : Object,
  }, {
    versionKey: false,
     timestamps: true
   }, {collection:"musicians"})

  const Musicians = mongoose.model("musicians", musicianSchema, "musicians")

  export default Musicians