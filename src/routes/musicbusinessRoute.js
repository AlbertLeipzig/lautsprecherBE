import express from "express";
const router = express.Router();
import { postMusicbusiness } from "../controllers/musicbusinessController.js";
import Musicbusiness from "../models/musicbusinessSchema.js";
import Schema from "../models/musicbusinessSchema.js";

router.post("/", async (req, res) => {
  const musicBusiness = {
    address: {
      number: req.body.number,
      PLZ: req.body.PLZ,
      street: req.body.street,
    },
    approved: false,
    businessName: req.body.businessName,
    image: req.body.image,
    inhaber: req.body.inhaber,
    mail: req.body.mail,
    phone: req.body.phone,
    socialMedia: {
      fb: req.body.fb,
      ig: req.body.ig,
      tw: req.body.tw,
      sc: req.body.sc,
      yt: req.body.yt,
      in: req.body.in,
      twitch: req.body.twitch
    },
    website: req.body.website,
  };

  try {
    const newMusicbusiness = await Musicbusiness.create(musicBusiness);
    res.status(201).json(newMusicbusiness)
  } catch (err) {
    console.log(err);
    res.sendStatus(400).json(err)
  }
});

router.get("/", async (req, res) => {
  try {
    const musicbusiness = await Musicbusiness.find();
    res.json(musicbusiness);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {

  const id = req.params.id

  try {
    const musicbusiness = await Musicbusiness.findOne({_id : id})
    res.json(musicbusiness)
    console.log(`You wanted the id ${id}`)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

router.delete("/:id", async (req, res) => {

  const id = req.params.id

  await MusicBusiness.findByIdAndDelete(id)
  res.redirect("/")
});

router.patch("/:id", async (req, res) => {

  const id = req.params.id

  try{
    const musicBusiness = await Musicbusiness.findById(id)
    
    musicBusiness.address = req.body.address || Musicbusiness.address
    musicBusiness.approved = req.body.approved || false
    musicBusiness.businessName = req.body.businessName || musicBusiness.businessName
    musicBusiness.image = req.body.image || musicBusiness.image
    musicBusiness.inhaber = req.body.inhaber || musicBusiness.inhaber
    musicBusiness.mail = req.body.mail || musicBusiness.mail
    musicBusiness.phone = req.body.phone || musicBusiness.phone
    musicBusiness.socialMedia = req.body.socialMedia || musicBusiness.socialMedia
    musicBusiness.website = req.body.website || musicBusiness.website

    const updatedmusicBusiness = await musicBusiness.save()
    res.json(updatedmusicBusiness)
  }
  catch(err){
    res.status(400).send(err)
  }
});

export default router;
