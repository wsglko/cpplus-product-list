const mongoose = require("mongoose")
const db = require("../mdb")
const tsSchema = new mongoose.Schema({
  user: { type: String, required: false },
  password: { type: String, required: false },
  remark: { type: String, required: false },
  update_on: { type: String, required: false }
})

const test = db.model("ts", tsSchema)
module.exports = test
