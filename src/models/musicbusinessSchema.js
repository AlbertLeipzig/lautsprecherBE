import mongoose from "mongoose";

const musicbusinessSchema = new mongoose.Schema(
  {
    address: Object,
    approved: { type: Boolean, required: true },
    businessName: { type: String, required: true },
    image: String,
    inhaber: { type: String, required: true },
    mail: { type: String, required: true },
    phone: Number,
    socialMedia: Object,
    website: String,
  }, {
    versionKey: false,
     timestamps: true
   }, { collection: "musicBusiness" }
);

const Musicbusiness = mongoose.model(
  "musicBusiness",
  musicbusinessSchema,
  "musicBusiness"
);

export default Musicbusiness;

/* 
  
  1A.- Inhaber (qwelkqwje)
  fName: Albert
  ...
  ID

  1B.- Menschen
  subscriber: boolean,
  inhaber: boolean

  2.- Musicbusiness (inhaber: qwelkqwje)

  businessName:asldkajsdlk
  inhaber: inhaber
  
  */
