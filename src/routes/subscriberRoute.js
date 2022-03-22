import express from "express";
const router = express.Router();
import {postSubscriber} from "../controllers/subscriberController.js"
import SubscribersModel from "../models/subscriberSchema.js";


router.post("/", async (req, res) => {
  const subscribers = await SubscribersModel.find()
  console.log(subscribers.length)
  
  const subscriber = req.body

  console.log(subscriber)
  
  /* const newSubscriber = new Schema.SubscribersModel(subscriber) */

/* 
  const savedObj = await Model.create(obj);
  res.json({
    savedObj,
  });

  obj = object dass du von Frontend bekommst
marca_de_verificación_blanca
ojos
manos_levantadas





16:01
versuch mal mit save und create (moongosse Methods)
16:01
Model = dein Model

   */
  try {
    async (err, newSubscriberResult) => {
      subscriber.save()
      console.log("New Subscriber In")
      res.end("Yes, NEW SUBSCRIBER CREATED")
    }
  }
  catch(err){
    console.log(err)
    res.end("NOT A NEW SUBSCRIBER, SORRY")
    console.log(err)
  }
})








router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;