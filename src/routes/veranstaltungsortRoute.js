import express from "express";
const router = express.Router();
import {postVeranstaltungsort} from "../controllers/veranstaltungsortController.js"
import Veranstaltungsort from "../models/veranstaltungsortSchema.js"
import Schema from "../models/veranstaltungsortSchema.js"


router.post("/add", async (req, res) => {
  const veranstaltungsort = {
    placeName : "",
    inhaber : "",
    address: "",
    website : "",
    mail : "",
    phone : "",
    socialMedia : "",
    image : "",
    approved : false
  }

  const newVeranstaltungsort = new Schema.Veranstaltungsort(veranstaltungsort)

  try {
    await newVeranstaltungsort.save( async (err, newVeranstaltungsortResult) => {
      console.log("New Veranstaltungsort In")
      res.end("Yes, NEW VERANSTALTUNGSORT CREATED")
    })
  }
  catch(err){
    console.log(err)
    res.end("NOT A NEW VERANSTALTUNGSORT, SORRY")
  }
})

router.get("/", async (req, res) => {
  try {
    const veranstaltungsort = await Veranstaltungsort.find()
    res.json(veranstaltungsort)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;