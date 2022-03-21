import mongoose from "mongoose";
const Schema = mongoose.Schema

const veranstaltungsortSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    instrument: Array,
    style : Array,
    website : String,
    mail : String,
    socialMedia : String,
    bands : Array,
    image : String,
    approved : Boolean
  })

  const Veranstaltungsort = mongoose.model("places", veranstaltungsortSchema, "places")

  export default Veranstaltungsort