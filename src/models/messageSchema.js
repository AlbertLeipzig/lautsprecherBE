import mongoose from "mongoose";
const Schema = mongoose.Schema

const messageSchema = new mongoose.Schema({

    fName : {type: String, required: true},
    lName : {type: String, required: true},
    mail : {type: String, required: true},
    messageTitle : {type: String, required: true},
    messageBody : {type: String, required: true}
  }, {
    versionKey: false,
     timestamps: true
   }, {collection:"messages"})

  const MessageModel = mongoose.model("messages", messageSchema, "messages")

  export default MessageModel