import mongoose from "mongoose";

const musicbusinessSchema = new mongoose.Schema({
    businessName : String,
    fname : String,
    lname : String,
    address: String,
    PLZ: Number,
    website : String,
    mail : String,
    socialMedia : Array,
    image : String,
    presentation: String,
    approved : Boolean
  })

  export default musicbusinessSchema