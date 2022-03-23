import express from "express";
const router = express.Router();
import {postVeranstaltungsort} from "../controllers/veranstaltungsortController.js"
import Veranstaltungsort from "../models/veranstaltungsortSchema.js"
import Schema from "../models/veranstaltungsortSchema.js"


router.post("/add", async (req, res) => {
  const veranstaltungsort = {
    approved : false,
    street: req.body.street,
    number: req.body.number,
    PLZ: req.body.PLZ,
    concerts: req.body.concerts,
    image : req.body.image,
    inhaber : req.body.ID,
    mail : req.body.mail,
    phone : req.body.phone,
    placeName : req.body.placeName,
    socialMedia : {
      fb:req.body.fb,
      tw:req.body.tw,
      ig:req.body.ig,
      sc:req.body.sc,
      yt:req.body.yt,
      twitch:req.body.twitch,
      in:req.body.in
    },
    website : req.body.website
  }

  const newVeranstaltungsort = new Schema.Veranstaltungsort(veranstaltungsort)

  try {
    await Veranstaltungsort.create(req.body)
  }
  catch(err){
    console.log(err)
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