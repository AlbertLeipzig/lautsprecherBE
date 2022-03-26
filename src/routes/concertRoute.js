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

router.delete("/:id", async (req, res) => {

  const id = req.params.id

  await Concerts.findByIdAndDelete(id)
  res.redirect("/")
});


router.patch("/:id", async (req, res) => {

  const id = req.params.id

  try{
    const concert = await Concerts.findById(id)
    concert.approved = req.body.approved || false
    concert.band = req.body.band || concert.band
    concert.cost = req.body.cost || concert.cost
    concert.duration = req.body.duration || concert.duration
    concert.image = req.body.image || concert.image
    concert.musician = req.body.musician || concert.musician
    concert.concertTitle = req.body.concertTitle || concert.concertTitle
    concert.place = req.body.place || concert.place
    concert.tickets = req.body.tickets || concert.tickets
    concert.time = req.body.time || concert.time
    concert.veranstaltungsort = req.body.veranstaltungsort || concert.veranstaltungsort

    const updatedconcert = await concert.save()
    res.json(updatedconcert)
  }
  catch(err){
    res.status(400).send(err)
  }
});

export default router;