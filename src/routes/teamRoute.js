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

router.get("/:id", async (req, res) => {

  const id = req.params.id

  try {
    const members = await TeamMember.findOne({_id : id})
    res.json(members)
    console.log(`You wanted the id ${id}`)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.delete("/:id", async (req, res) => {

  const id = req.params.id

  await TeamMember.findByIdAndDelete(id)
  res.redirect("/")
});

router.patch("/:id", async (req, res) => {

  const id = req.params.id

  try{
    const teamMember = await TeamMember.findById(id)
    teamMember.approved = req.body.approved || false
    teamMember.fName = req.body.fName || TeamMember.fName
    teamMember.lName = req.body.lName || TeamMember.lName
    teamMember.mail = req.body.mail || TeamMember.mail
    teamMember.image = req.body.image || teamMember.image
    teamMember.password = req.body.password || teamMember.password
    teamMember.phone = req.body.phone || teamMember.phone
    teamMember.role = req.body.role || teamMember.role
    teamMember.socialMedia = req.body.socialMedia || teamMember.socialMedia
    teamMember.website = req.body.website || teamMember.website

    const updatedteamMember = await teamMember.save()
    res.json(updatedteamMember)
  }
  catch(err){
    res.status(400).send(err)
  }
});

export default router;