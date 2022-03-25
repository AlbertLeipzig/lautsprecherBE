import express from "express";
import { RGB_S3TC_DXT1_Format } from "three";
const router = express.Router();
import {postTeamMember} from "../controllers/teamController.js"
import TeamMember from "../models/teamSchema.js"
import  Schema from "../models/teamSchema.js"


router.post("/", async (req, res) => {
  const member = {
    fName : req.body.fName,
    lName : req.body.lName,
    mail : req.body.mail,
    image : req.body.image,
    password: req.body.password,
    phone: req.body.phone,
    role : req.body.role,
    website : req.body.website,
    fb: req.body.fb,
    ig: req.body.ig,
    tw: req.body.tw,
    sc: req.body.sc,
    yt: req.body.yt,
    in: req.body.in,
    twitch: req.body.twitch,
    approved : false
  }

  try {
    const newTeamMember = await TeamMember.create(member)
    res.status(201).json(newTeamMember)
  }
  catch(err){
    console.log(err)
    res.sendStatus(400)
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