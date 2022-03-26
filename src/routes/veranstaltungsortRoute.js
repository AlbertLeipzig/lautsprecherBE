import express from "express";
const router = express.Router();
import {postVeranstaltungsort} from "../controllers/veranstaltungsortController.js"
import Veranstaltungsort from "../models/veranstaltungsortSchema.js"
import Schema from "../models/veranstaltungsortSchema.js"


router.post("/", async (req, res) => {
  const veranstaltungsort = {
    approved : false,
    address: {
      street: req.body.street,
      number: req.body.number,
      PLZ: req.body.PLZ,
    },
    concerts: req.body.concerts,
    image : req.body.image,
    inhaber : req.body.inhaber,
    mail : req.body.mail,
    phone : req.body.phone,
    placeName : req.body.placeName,
    socialMedia : {
      fb:req.body.fb,
      tw:req.body.tw,
      ig:req.body.ig,
      sc:req.body.sc,
      yt:req.body.yt,
      twitch:req.body.twitch,
      in:req.body.in
    },
    website : req.body.website
  }

  try {
    const newVeranstaltungsort = await Veranstaltungsort.create(veranstaltungsort)
    res.status(201).json(newVeranstaltungsort)
  }
  catch(err){
    console.log(err)
    res.sendStatus(400)
  }
})

router.get("/", async (req, res) => {
  try {
    const veranstaltungsort = await Veranstaltungsort.find()
    res.json(veranstaltungsort)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.get("/:id", async (req, res) => {

  const id = req.params.id

  try {
    const veranstaltungsort = await Veranstaltungsort.findOne({_id : id})
    res.json(veranstaltungsort)
    console.log(`You wanted the id ${id}`)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});


router.delete("/:id", async (req, res) => {

  const id = req.params.id

  await Veranstaltungsort.findByIdAndDelete(id)
  res.redirect("/")
});



router.patch("/:id", async (req, res) => {

  const id = req.params.id

  try{
    const veranstaltungsort = await Veranstaltungsort.findById(id)
    veranstaltungsort.approved = req.body.approved || false
    veranstaltungsort.address = req.body.address || veranstaltungsort.address
    veranstaltungsort.concerts = req.body.concerts || veranstaltungsort.concerts
    veranstaltungsort.image = req.body.image || veranstaltungsort.image
    veranstaltungsort.inhaber = req.body.inhaber || veranstaltungsort.inhaber
    veranstaltungsort.mail = req.body.mail || veranstaltungsort.mail
    veranstaltungsort.phone = req.body.phone || veranstaltungsort.phone
    veranstaltungsort.placeName = req.body.placeName || veranstaltungsort.placeName
    veranstaltungsort.socialMedia = req.body.socialMedia || veranstaltungsort.socialMedia
    veranstaltungsort.website = req.body.website || veranstaltungsort.website

    const updatedveranstaltungsort = await veranstaltungsort.save()
    res.json(updatedveranstaltungsort)
  }
  catch(err){
    res.status(400).send(err)
  }
});


export default router;