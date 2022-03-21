import express from "express";
const router = express.Router();
import {postMusician} from "../controllers/musicianController.js"
import Musicians from "../models/musicianSchema.js"
import  Schema from "../models/musicianSchema.js"


router.post("/add", async (req, res) => {
  const musician = {
    fname : "Richard",
    lname : "Wagner",
    instrument : "Orchestra",
    style : ["klassik"],
    website : "wagner.de",
    mail : "mail@wagner.de",
    socialMedia : "",
    bands : "Gewandhaus",
    image : "",
    approved : true
  }
  const newMusician = new Schema.Musicians(musician)

  try {
    await newMusician.save( async (err, newMusicianResult) => {
      console.log("New Musician In")
      res.end("Yes, NEW MUSICIAN CREATED")
    })
  }
  catch(err){
    console.log(err)
    res.end("NOT A NEW MUSICIAN, SORRY")
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