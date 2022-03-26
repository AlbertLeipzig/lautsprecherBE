import express from "express";
const router = express.Router();
import {postMusician} from "../controllers/musicianController.js"
import Musicians from "../models/musicianSchema.js"
import  Schema from "../models/musicianSchema.js"


router.post("/", async (req, res) => {
  const musician = {
    approved : true,
    fName : req.body.fName,
    lName : req.body.lName,
    mail : req.body.mail,
    bands : req.body.bands,
    image : req.body.image,
    instruments : req.body.instruments,
    style : req.body.style,
    socialMedia : {
      fb: req.body.fb,
      ig: req.body.ig,
      tw: req.body.tw,
      sc: req.body.sc,
      yt: req.body.yt,
      in: req.body.in,
      twitch: req.body.twitch
    },
    website : req.body.website
  }

  try {
    const newMusician = await Musicians.create(musician)
    res.status(201).json(newMusician)
  }
  catch(err){
    console.log(err)
    res.status(400).json(err)
  }
})

router.get("/", async (req, res) => {
  try {
    const musicians = await Musicians.find()
    res.json(musicians)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.get("/:id", async (req, res) => {

  const id = req.params.id

  try {
    const musicians = await Musicians.findOne({_id : id})
    res.json(musicians)
    console.log(`You wanted the id ${id}`)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.delete("/:id", async (req, res) => {

  const id = req.params.id

  await Musicians.findByIdAndDelete(id)
  res.redirect("/")
});

router.patch("/:id", async (req, res) => {

  const id = req.params.id

  try{
    const musician = await Musicians.findById(id)
    musician.approved = req.body.approved || false
    musician.fName = req.body.fName || musician.fName
    musician.lName = req.body.lName || musician.lName
    musician.mail = req.body.mail || musician.mail
    musician.bands = req.body.bands || musician.bands
    musician.image = req.body.image || musician.image
    musician.instruments = req.body.instruments || musician.instruments
    musician.style = req.body.style || musician.style
    musician.website = req.body.website || musician.website
    musician.socialMedia = req.body.socialMedia || musician.socialMedia

    const updatedmusician = await musician.save()
    res.json(updatedmusician)
  }
  catch(err){
    res.status(400).send(err)
  }
});

export default router;