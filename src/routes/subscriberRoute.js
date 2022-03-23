import express from "express";
const router = express.Router();
import {postSubscriber} from "../controllers/subscriberController.js"
import Subscribers from "../models/subscriberSchema.js"
import  Schema from "../models/musicianSchema.js"


/* router.post("/", (req, res) => {
  console.log(req.body)
}) */

router.post("/", async (req, res) => {
  const subscriber = {
    fname : req.body.fname,
    lname : req.body.lname,
    email : req.body.email
  /*   date : Date.now(),
    approved : true */
  }
  
  /* const newSubscriber = new Schema.Subscribers(subscriber) */

  try {
    await Subscribers.create(subscriber)
  }
  catch(err){
    console.log(err)
    /* res.end("NOT A NEW SUBSCRIBER, SORRY") */
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

  /* const newSubscriber = new Schema.SubscribersModel(subscriber) */
  
/* 
  const savedObj = await Model.create(obj);
  res.json({
    savedObj,
  });

   */
/* const savedObj = await Model.create(obj);
  res.json({
    savedObj,
  }); */