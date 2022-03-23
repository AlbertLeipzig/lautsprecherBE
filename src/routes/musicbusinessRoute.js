import express from "express";
const router = express.Router();
import {postMusicbusiness} from "../controllers/musicbusinessController.js"
import Musicbusiness from "../models/musicbusinessSchema.js"
import  Schema from "../models/musicbusinessSchema.js"


router.post("/add", async (req, res) => {
  const musicBusiness = {
    number: req.body.number,
    PLZ: req.body.PLZ,
    stree: req.body.street,
    approved : false,
    image : req.body.image,
    inhaber : req.body.inhaber,
    mail : req.body.mail,
    businessName : req.body.businessName,
    phone : req.body.phone,
    socialMedia : {
      fb: req.body.fb,
      ig: req.body.ig,
      tw: req.body.tw,
      sc: req.body.sc,
      yt: req.body.yt,
      in: req.body.in,
      twitch: req.body.twitch
    },
    website : req.body.website
  }

  const newMusicbusiness = new Schema.Musicbusiness(musicBusiness)

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