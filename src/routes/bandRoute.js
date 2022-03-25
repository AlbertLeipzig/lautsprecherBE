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

export default router;