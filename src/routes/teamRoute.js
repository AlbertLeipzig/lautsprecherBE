import express from "express";
const router = express.Router();
import {postTeamMember} from "../controllers/teamController.js"
import TeamMember from "../models/teamSchema.js"
import  Schema from "../models/teamSchema.js"


router.post("/", async (req, res) => {
  const member = {
    fname : "",
    lname : "",
    position : "",
    website : "wagner.de",
    mail : "mail@wagner.de",
    socialMedia : "",
    image : "",
    approved : false
  }

  
  const newMember = new Schema.TeamMember(member)

  try {
    await newMember.save( async (err, newMemberResult) => {
      console.log("New Member In")
      res.end("Yes, NEW MEMBER CREATED")
    })
  }
  catch(err){
    console.log(err)
    res.end("NOT A NEW MEMBER, SORRY")
  }
})

router.get("/", async (req, res) => {
  try {
    const members = await TeamMember.find()
    res.json(members)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;