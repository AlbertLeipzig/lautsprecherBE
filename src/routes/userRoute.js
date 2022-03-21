import express from "express";
const router = express.Router();
import {postUser} from "../controllers/userController.js"
/* 
fetch("http://localhost:5000/api/user")


fetch(`http://localhost:5000/api/user/?userName=${userName}`)
fetch(`http://localhost:5000/api/user/pedro`)

 */
router.post("/", postUser);

router.get("/", (req, res) => {
  res.send("get user");
});
/* 
router.get("/u/:id", (req, res) => {
  console.log("I'm a dynamic ID")
  const id = req.params.id
  res.send(id);
});

router.get("/maxim", (req, res) => {
  console.log("I'm happening")  
  res.send("maxim is crazy");
});
router.post("/register", (req, res) => {
  const userName = req.query.userName
  const userFName = req.body.userName
  res.json({
    message : `this user is ${userName}`,
    message2 : `this user is ${userFName}`
  })
});

*/
export default router;