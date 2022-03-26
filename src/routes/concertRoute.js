import express from "express";
const router = express.Router();
import {postConcert} from "../controllers/concertController.js"
import Concerts from "../models/concertSchema.js"
import Schema from "../models/concertSchema.js"


router.post("/", async (req, res) => {
  const concert = {
    approved : true,
    address: {
      number: req.body.number,
      PLZ: req.body.PLZ,
      street: req.body.street,
    },
    bands : req.body.bands,
    concertTitle : req.body.concertTitle,
    cost : req.body.cost,
    date : req.body.date,
    duration : req.body.duration,
    image : req.body.image,
    musicians : req.body.musicians,
    style : req.body.style,
    tickets: req.body.tickets,
    veranstaltungsort: req.body.veranstaltungsort,
  }

  try {
    const newConcert = await Concerts.create(concert)
    res.status(201).json(newConcert)
  }
  catch(err){
    console.log(err)
    res.sendStatus(400)
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

router.get("/:id", async (req, res) => {

  const id = req.params.id

  try {
    const concerts = await Concerts.findOne({_id : id})
    res.json(concerts)
    console.log(`You wanted the id ${id}`)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});


export default router;