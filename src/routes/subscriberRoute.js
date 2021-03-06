import express from "express";
const router = express.Router();
import {postSubscriber} from "../controllers/subscriberController.js"
import Subscribers from "../models/subscriberSchema.js"
import  Schema from "../models/musicianSchema.js"


router.post("/", async (req, res) => {
  const subscriber = {
    fName : req.body.fName,
    lName : req.body.lName,
    mail : req.body.mail,
    approved: false
  }
  
  try {
    const newSubscriber = await Subscribers.create(subscriber)
    res.status(201).json(newSubscriber)
  }
  catch(err){
    console.log(err)
    res.sendStatus(400)
  }
  
})

router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscribers.find()
    res.json(subscribers)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.get("/:id", async (req, res) => {

  const id = req.params.id

  try {
    const subscribers = await Subscribers.findOne({_id : id})
    res.json(subscribers)
    console.log(`You wanted the id ${id}`)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.delete("/:id", async (req, res) => {

  const id = req.params.id

  await Subscribers.findByIdAndDelete(id)
  res.redirect("/")
});

router.patch("/:id", async (req, res) => {

  const id = req.params.id

  try{
    const subscriber = await Subscribers.findById(id)
    subscriber.approved = req.body.approved || false
    subscriber.fName = req.body.fName || Subscribers.fName
    subscriber.lName = req.body.lName || Subscribers.lName
    subscriber.mail = req.body.mail || Subscribers.mail

    const updatedsubscriber = await subscriber.save()
    res.json(updatedsubscriber)
  }
  catch(err){
    res.status(400).send(err)
  }
});

export default router;