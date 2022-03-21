import express from "express";
const router = express.Router();
import {postArticle} from "../controllers/postArticleController.js"

router.post("/", postArticle);

router.get("/", async (req, res) => {
  try {
    const musicians = await Musicians.find()
    res.json(musicians)
  }
  catch (err) {
    res.json({ message : err.message })
  }
});

export default router;