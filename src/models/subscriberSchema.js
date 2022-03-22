import mongoose from "mongoose";
const Schema = mongoose.Schema

const subscriberSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    approved : Boolean
  })

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