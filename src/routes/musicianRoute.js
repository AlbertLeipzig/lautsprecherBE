import express from "express";
const router = express.Router();
import {postMusician} from "../controllers/musicianController.js"
import Musicians from "../models/musicianSchema.js"
import  Schema from "../models/musicianSchema.js"


router.post("/add", async (req, res) => {
  const musician = {
    fname : req.body.fName,
    lname : req.body.lName,
    instrument : req.body.instrument,
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
    bands : req.body.bands,
    image : req.body.img,
    approved : true
  }
  const newMusician = new Schema.Musicians(musician)

  try {
    await newMusician.create(req.body)
  }
  catch(err){
    console.log(err)
  }
})

router.get("/", async (req, res) => {
  try {
    const musicians = await Musicians.find()
    res.json(musicians)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;