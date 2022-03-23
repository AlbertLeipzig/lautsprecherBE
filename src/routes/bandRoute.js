import express from "express";
const router = express.Router();
import {postBand} from "../controllers/bandController.js"
import Bands from "../models/bandSchema.js"
import  Schema from "../models/bandSchema.js"


router.post("/add", async (req, res) => {
  const band = {
    bandName : req.body.bandName,
    musicians : req.body.musicians,
    style : req.body.style,
    website : req.body.website,
    mail : req.body.mail,
    socialMedia : {
      fb: req.body.fb,
      ig: req.body.ig,
      tw: req.body.tw,
      sc: req.body.sc,
      yt: req.body.yt,
      in: req.body.in,
      twitch: req.body.twitch
    },
    image : req.body.image,
    approved : false
  }

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