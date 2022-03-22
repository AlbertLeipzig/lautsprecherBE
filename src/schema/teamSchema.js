import mongoose from "mongoose";
const Schema = mongoose.Schema

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

  const TeamSchema = mongoose.model("team", teamSchema, "team")

  export default TeamSchema