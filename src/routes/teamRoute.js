import express from "express";
const router = express.Router();
import {postTeamMember} from "../controllers/teamController.js"
import TeamMember from "../models/teamSchema.js"
import  Schema from "../models/teamSchema.js"


router.post("/", async (req, res) => {
  const member = {
    fName : req.body.fName,
    lName : req.body.lName,
    position : req.body.position,
    website : req.body.website,
    mail : req.body.mail,
    socialMedia : req.body.socialMedia,
    image : req.body.image,
    approved : false
  }

  try {
    await TeamMember.create(req.body)
  }
  catch(err){
    console.log(err)
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