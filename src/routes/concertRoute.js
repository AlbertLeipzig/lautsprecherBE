import express from "express";
const router = express.Router();
import {postConcert} from "../controllers/concertController.js"
import Concerts from "../models/concertSchema.js"
import Schema from "../models/concertSchema.js"


router.post("/add", async (req, res) => {
  const concert = {
    title : "Yahoooooooo",
    band : "Sylos",
    style : "Electro swing",
    place : "Augustusplatz 1",
    time : "0102",
    mail : "mail@wagner.de",
    socialMedia : "",
    bands : "Gewandhaus",
    image : "",
    approved : true
  }
  const newConcert = new Schema.Concerts(concert)

  try {
    await newConcert.save( async (err, newConcertResult) => {
      console.log("New Concert In")
      res.end("Yes, NEW CONCERT CREATED")
    })
  }
  catch(err){
    console.log(err)
    res.end("NOT A NEW CONCERT, SORRY")
  }
})

router.get("/", async (req, res) => {
  try {
    const concerts = await Concerts.find()
    res.json(concerts)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;