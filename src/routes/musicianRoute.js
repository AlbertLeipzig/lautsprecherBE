import express from "express";
const router = express.Router();
import {postMusician} from "../controllers/musicianController.js"
import Musicians from "../models/musicianSchema.js"
import  Schema from "../models/musicianSchema.js"


router.post("/add", async (req, res) => {
  const musician = {
    approved : true,
    fName : req.body.fName,
    lName : req.body.lName,
    mail : req.body.mail,
    bands : req.body.bands,
    date: req.body.date,
    image : req.body.img,
    instruments : req.body.instruments,
    password: req.body.password,
    style : req.body.style,
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