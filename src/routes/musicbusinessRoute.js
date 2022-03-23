import express from "express";
const router = express.Router();
import {postMusicbusiness} from "../controllers/musicbusinessController.js"
import Musicbusiness from "../models/musicbusinessSchema.js"
import  Schema from "../models/musicbusinessSchema.js"


router.post("/add", async (req, res) => {
  const musicBusiness = {
    businessName : req.body.businessName,
    inhaber : req.body.inhaber,
    address: req.body.address,
    phone : req.body.phone,
    mail : req.body.mail,
    website : req.body.website,
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
    await Musicbusiness.create(req.body)
  }
  catch(err){
    console.log(err)
  }
})

router.get("/", async (req, res) => {
  try {
    const musicbusiness = await Musicbusiness.find()
    res.json(musicbusiness)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;