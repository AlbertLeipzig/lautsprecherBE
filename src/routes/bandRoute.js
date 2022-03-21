import express from "express";
const router = express.Router();
import {postBand} from "../controllers/bandController.js"
import Bands from "../models/bandSchema.js"
import  Schema from "../models/bandSchema.js"


router.post("/add", async (req, res) => {
  const band = {
    bandName : "Yahoo",
    musicians : [],
    style : "Blues",
    website : "",
    mail : "",
    socialMedia : "",
    image : "",
    approved : false
  }
  const newBand = new Schema.Bands(band)

  try {
    await newBand.save( async (err, newBandResult) => {
      console.log("New Band In")
      res.end("Yes, NEW BAND CREATED")
    })
  }
  catch(err){
    console.log(err)
    res.end("NOT A NEW BAND, SORRY")
  }
})

router.get("/", async (req, res) => {
  try {
    const bands = await Bands.find()
    res.json(bands)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;