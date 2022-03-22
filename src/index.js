/* const express = require("express") */
import "./config.js";
import "./db-connect.js";
import morgan from "morgan";
import express from "express";
import cors from "cors";

import actualArticleRoute from "./routes/actualArticleRoute.js";
import historyArticleRoute from "./routes/historyArticleRoute.js";
import bandRoute from "./routes/bandRoute.js";
import musicianRoute from "./routes/musicianRoute.js";
import concertRoute from "./routes/concertRoute.js";
import musicbusinessRoute from "./routes/musicbusinessRoute.js";
import teamRoute from "./routes/teamRoute.js";
import veranstaltungsortRoute from "./routes/veranstaltungsortRoute.js";
import subscriberRoute from "./routes/subscriberRoute.js";

const app = express()

const PORT = process.env.PORT || 4000
const MENSAJE = process.env.MENSAJE
const PWD = process.env.PASSWORD

app.use(cors({
    origin: process.env.FRONTEND,
    credentials: true
}))

console.log(process.env.FRONTEND)
app.use(morgan("tiny"))
/* body parser */
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hi there")
})

app.use("/api/actualarticle", actualArticleRoute)
app.use("/api/historyarticle", historyArticleRoute)
app.use("/api/musician", musicianRoute)
app.use("/api/band", bandRoute)
app.use("/api/concert", concertRoute)
app.use("/api/veranstaltungsort", veranstaltungsortRoute)
app.use("/api/musicbusiness", musicbusinessRoute)
app.use("/api/team", teamRoute)
app.use("/api/subscribers", subscriberRoute)


app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
    console.log(`RECORDS: http://localhost:${PORT}/api/musician`)
    console.log(`ACTUAL ARTICLE: http://localhost:${PORT}/api/actualarticle`)
    console.log(`HISTORY ARTICLE: http://localhost:${PORT}/api/historyarticle`)
    console.log(`BAND: http://localhost:${PORT}/api/band`)
    console.log(`CONCERT: http://localhost:${PORT}/api/concert`)
    console.log(`VERANSTALTUNGSORT:http://localhost:${PORT}/api/veranstaltungsort`)
    console.log(`MUSICBUSINESS: http://localhost:${PORT}/api/musicbusiness`)
    console.log(`TEAM: http://localhost:${PORT}/api/team`)
})

/* 
.then (() => {
    console.log(`db connected on port ${PORT}`)
})
.catch( (err) => console.log(err))
*/

/* 
.then(result => {
    
    app.listen(PORT, () => console.log(MENSAJE))
})
.catch( err => console.log(err)) */