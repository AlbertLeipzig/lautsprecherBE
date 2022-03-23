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
  
  const newSubscriber = new Schema.Subcribers(subscriber)

  try {
    await Subscribers.create(req.body)
  }
  catch(err){
    console.log(err)
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

export default router;