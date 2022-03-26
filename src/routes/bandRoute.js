import express from "express";
const router = express.Router();
import {postBand} from "../controllers/bandController.js"
import Bands from "../models/bandSchema.js"
import  Schema from "../models/bandSchema.js"


router.post("/", async (req, res) => {
  const band = {
    approved : false,
    bandName : req.body.bandName,
    concerts: req.body.concerts,
    image : req.body.image,
    mail : req.body.mail,
    musicians : req.body.musicians,
    socialMedia : {
      fb: req.body.fb,
      ig: req.body.ig,
      tw: req.body.tw,
      sc: req.body.sc,
      yt: req.body.yt,
      in: req.body.in,
      twitch: req.body.twitch
    },
    style : req.body.style,
    vorsitzender: req.body.vorsitzender,
    website : req.body.website
  }

  try {
    const newBand = await Bands.create(band)
    res.status(201).json(newBand)
  }
  catch(err){
    console.log(err)
    res.sendStatus(400)
  }
})

router.get("/", async (req, res) => {
  try {
    const bands = await Bands.find()
    res.json(bands)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});


router.get("/:id", async (req, res) => {

  const id = req.params.id

  try {
    const bands = await Bands.findOne({_id : id})
    res.json(bands)
    console.log(`You wanted the id ${id}`)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.delete("/:id", async (req, res) => {

  const id = req.params.id

  await Bands.findByIdAndDelete(id)
  res.redirect("/")
});


router.patch("/:id", async (req, res) => {

  const id = req.params.id

  try{
    const band = await Bands.findById(id)
    band.approved = req.body.approved || false
    band.bandName = req.body.articleTitle || band.bandName
    band.concerts = req.body.author || band.concerts
    band.image = req.body.image || band.image
    band.mail = req.body.body || band.mail
    band.musicians = req.body.tags || band.musicians
    band.socialMedia = req.body.tags || band.socialMedia
    band.style = req.body.tags || band.style
    band.vorsitzender = req.body.tags || band.vorsitzender
    band.website = req.body.tags || band.website

    const updatedBand = await band.save()
    res.json(updatedBand)
  }
  catch(err){
    res.status(400).send(err)
  }
});

export default router;