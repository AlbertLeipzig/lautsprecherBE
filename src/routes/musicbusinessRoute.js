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

export default router;
