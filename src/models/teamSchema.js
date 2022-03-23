import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    approved : {type: Boolean, required: true},
    fName : {type: String, required: true},
    lName : {type: String, required: true},
    mail : {type: String, required: true},
    image : {type: String, required: true},
    password: {type: String, required: true},
    phone: Number,
    role: {type: String, required: true},
    socialMedia : Object,
    website : String
  })

  const TeamMember = mongoose.model("team", teamSchema, "team")


  export default TeamMember