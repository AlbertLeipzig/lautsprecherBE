import mongoose from "mongoose";
const Schema = mongoose.Schema

const subscriberSchema = new mongoose.Schema({
    /* _id: mongoose.Schema.Types.ObjectId, */
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


  /* import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    accessGroups: { type: String, required: true },
    hash: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model('UserModel', userSchema, 'users');

export default UserModel; */