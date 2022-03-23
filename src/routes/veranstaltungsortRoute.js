import express from "express";
const router = express.Router();
import {postVeranstaltungsort} from "../controllers/veranstaltungsortController.js"
import Veranstaltungsort from "../models/veranstaltungsortSchema.js"
import Schema from "../models/veranstaltungsortSchema.js"


router.post("/add", async (req, res) => {
  const veranstaltungsort = {
    placeName : req.body.placeName,
    inhaber : req.body.ID,
    address: req.body.address,
    website : req.body.website,
    mail : req.body.mail,
    phone : req.body.phone,
    socialMedia : {
      fb:req.body.fb,
      tw:req.body.tw,
      ig:req.body.ig,
      sc:req.body.sc,
      yt:req.body.yt,
      twitch:req.body.twitch,
      in:req.body.in
    },
    image : req.body.image,
    approved : false
  }

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