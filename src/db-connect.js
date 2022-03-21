import "./config.js"
import mongoose from "mongoose"

const db = mongoose.connect("mongodb+srv://AlbertLoewe:MP7b8sUUbmprc409@cluster0.t5thd.mongodb.net/data?retryWrites=true&w=majority", {useNewUrlParser : true}) 

// URINNEN
// SENSITIVE DATA => never store stuff like this in code
// connection strings, passwords, secrets

// we need dotenv.config() to be executred BEFOE!

const DB_URI = process.env.DB_URI;

console.log({ DB_URI });
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection estabished!'))
  .catch((err) => console.log('[ERROR] Connection failed', err));