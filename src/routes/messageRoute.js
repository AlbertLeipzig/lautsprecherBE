import express from "express";
const router = express.Router();
import {postMessage} from "../controllers/messageController.js"
import Messages from "../models/messageSchema.js"
import  Schema from "../models/musicianSchema.js"


router.post("/", async (req, res) => {
  const message = {
    fName : req.body.fName,
    lName : req.body.lName,
    mail : req.body.mail,
    messageTitle: req.body.messageTitle,
    messageBody : req.body.messageBody
  }
  
  try {
    const newMessage = await Messages.create(message)
    res.status(201).json(newMessage)
  }
  catch(err){
    console.log(err)
    res.sendStatus(400)
  }
  
})

router.get("/", async (req, res) => {
  try {
    const messages = await Messages.find()
    res.json(messages)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;