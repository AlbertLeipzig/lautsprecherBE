import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  address: {type: Object, required: true},
  approved : {type: Boolean, required: true},
  concerts: Array,
  image : String,
  inhaber: {type: String, required: true},
  mail : String,
  phone : Number,
  placeName: {type: String, required: true},
  socialMedia: Object,
  website : String
  }, {
    versionKey: false,
     timestamps: true
   }, {collection:"team"})

  const TeamMember = mongoose.model("team", teamSchema, "team")


  export default TeamMember