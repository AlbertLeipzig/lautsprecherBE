import express from "express";
const router = express.Router();
import {postMusicbusiness} from "../controllers/musicbusinessController.js"
import Musicbusiness from "../models/musicbusinessSchema.js"
import  Schema from "../models/musicbusinessSchema.js"


router.post("/add", async (req, res) => {
  const musicBusiness = {
    businessName : "Test Business",
    inhaber : "",
    address: "",
    PLZ : "",
    phone : "",
    mail : "",
    website : "",
    socialMedia : "",
    presentation : "",
    image : "",
    approved : false
  }
  const newMusicbusiness = new Schema.Musicbusiness(musicBusiness)

  try {
    await newMusicbusiness.save( async (err, newMusicbusinessResult) => {
      console.log("New Music Business In")
      res.end("Yes, NEW MUSIC BUSINESS CREATED")
    })
  }
  catch(err){
    console.log(err)
    res.end("NOT A NEW MUSIC BUSINESS, SORRY")
  }
})

router.get("/", async (req, res) => {
  try {
    const musicbusiness = await Musicbusiness.find()
    res.json(musicbusiness)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;