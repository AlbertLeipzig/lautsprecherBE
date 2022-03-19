/* const express = require("express") */
import mongoose from "mongoose"
import morgan from "morgan"
import dotenv from "dotenv"
import express from "express"
dotenv.config()
const app = express()
import cors from "cors"

app.use(cors())


import articleRoute from "./routes/singleActualArticleRoute.js"
import bandRoute from "./routes/bandRoute.js"
import musicianRoute from "./routes/musicianRoute.js"
import concertRoute from "./routes/concertRoute.js"
import musicbusinessRoute from "./routes/musicbusinessRoute.js"
import teamMemberRoute from "./routes/teamMemberRoute.js"
import veranstaltungsortRoute from "./routes/veranstaltungsortRoute.js"


app.use(morgan("tiny"))
/* body parser */
app.use(express.json())



app.get("/", (req, res) => {
    res.send("hi there")
})

app.use("/api/article", articleRoute)
app.use("/api/musician", musicianRoute)
app.use("/api/band", bandRoute)
app.use("/api/concert", concertRoute)
app.use("/api/veranstaltungsort", veranstaltungsortRoute)
app.use("/api/musicbusiness", musicbusinessRoute)
app.use("/api/team", teamMemberRoute)


const PORT = process.env.PORT || 4000
const MENSAJE = process.env.MENSAJE
const db = mongoose.connect(`mongodb+srv://AlbertLoewe:UnVz31ideYhOw0yP@cluster0.t5thd.mongodb.net/data`,
)


.then(result => {
    
    app.listen(PORT, () => console.log(MENSAJE))
})
.catch( err => console.log(err))