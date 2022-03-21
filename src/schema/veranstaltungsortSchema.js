import mongoose from "mongoose";

const veranstaltungsortSchema = new mongoose.Schema({
    placeName : String,
    inhaber : String,
    address: String,
    website : String,
    mail : String,
    phone : Number,
    socialMedia : Array,
    image : String,
    approved : Boolean
  })

  export default veranstaltungsortSchema