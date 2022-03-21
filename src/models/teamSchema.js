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

  const TeamMember = mongoose.model("team", teamSchema, "team")


  export default TeamMember