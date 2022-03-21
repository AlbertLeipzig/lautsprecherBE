import mongoose from "mongoose";

const bandSchema = new mongoose.Schema({
    bandName : String,
    musicians : Array,
    style : Array,
    website : Array,
    mail : String,
    socialMedia : Array,
    image : String,
    approved : Boolean
  })

  export default bandSchema