import mongoose from "mongoose";

const musicbusinessSchema = new mongoose.Schema({
    address: Object,
    approved : {type: Boolean, required: true},
    businessName : {type: String, required: true},
    image : String,
    inhaber : { type: String, required: true},
    mail : {type: String, required: true},
    phone : Number,
    socialMedia : Object,
    website : String
  })

  const Musicbusiness = mongoose.model("musicBusiness", musicbusinessSchema, "musicBusiness")

  export default Musicbusiness