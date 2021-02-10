require("dotenv").config()
const mongoose = require("mongoose")

const db = mongoose.createConnection(
  process.env.DB_CPP,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Mongo DB Connected")
)

module.exports = db