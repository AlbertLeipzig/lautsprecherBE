/* const express = require("express") */
import "./config.js";
import "./db-connect.js";
import morgan from "morgan";
import express from "express";
import cors from "cors";

import articleRoute from "./routes/singleActualArticleRoute.js";
import bandRoute from "./routes/bandRoute.js";
import musicianRoute from "./routes/musicianRoute.js";
import concertRoute from "./routes/concertRoute.js";
import musicbusinessRoute from "./routes/musicbusinessRoute.js";
import teamMemberRoute from "./routes/teamMemberRoute.js";
import veranstaltungsortRoute from "./routes/veranstaltungsortRoute.js";

const app = express()

const PORT = process.env.PORT || 4000
const MENSAJE = process.env.MENSAJE
const PWD = process.env.PASSWORD

app.use(cors())
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


app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
    console.log(`RECORDS: http://localhost:${PORT}/api/musician`)
    console.log(`ARTICLE: http://localhost:${PORT}/api/article`)
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