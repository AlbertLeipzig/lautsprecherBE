import mongoose from "mongoose";
const Schema = mongoose.Schema

const subscriberSchema = new mongoose.Schema({

    approved : {type: Boolean, required: true},
    fName : {type: String, required: true},
    lName : {type: String, required: true},
    mail : {type: String, required: true}
  }, {
    versionKey: false,
     timestamps: true
   }, {collection:"subscribers"})

  const SubscribersModel = mongoose.model("SubscribersModel", subscriberSchema, "subscribers")

  export default SubscribersModel