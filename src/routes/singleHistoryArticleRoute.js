import express from "express";
const router = express.Router();
import {postArticle} from "../controllers/postArticleController.js"

router.post("/", postArticle);

router.get("/", (req, res) => {
  res.send("get article");
});

export default router;