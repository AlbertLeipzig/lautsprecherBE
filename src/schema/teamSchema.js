import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    position: String,
    website : String,
    mail : String,
    socialMedia : String,
    image : String,
    approved : Boolean
  })

  export default teamSchema