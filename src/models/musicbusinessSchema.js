import mongoose from "mongoose";

const musicbusinessSchema = new mongoose.Schema({
    businessName : String,
    inhaber : String,
    address: String,
    PLZ : Number,
    phone : Number,
    mail : String,
    website : String,
    socialMedia : String,
    presentation : String,
    image : String,
    approved : Boolean
  })

  const Musicbusiness = mongoose.model("musicBusiness", musicbusinessSchema, "musicBusiness")

  export default Musicbusiness