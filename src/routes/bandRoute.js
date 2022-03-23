import express from "express";
const router = express.Router();
import {postBand} from "../controllers/bandController.js"
import Bands from "../models/bandSchema.js"
import  Schema from "../models/bandSchema.js"


router.post("/add", async (req, res) => {
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

  const newBand = new Schema.Bands(band)

  try {
    await Bands.create(req.body)
  }
  catch(err){
    console.log(err)
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