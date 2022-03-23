import express from "express";
const router = express.Router();
import {postConcert} from "../controllers/concertController.js"
import Concerts from "../models/concertSchema.js"
import Schema from "../models/concertSchema.js"


router.post("/add", async (req, res) => {
  const concert = {
    title : req.body.title,
    band : req.body.bandName,
    musician : req.body.musicianName,
    style : req.body.style,
    place : req.body.place,
    time : req.body.time,
    duration : req.body.duration,
    cost : req.body.cost,
    image : req.body.image,
    approved : true
  }

  try {
    await Concerts.create(req.body)
  }
  catch(err){
    console.log(err)
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