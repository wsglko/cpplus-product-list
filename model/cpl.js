const mongoose = require("mongoose")
const db = require("../mdb")
const plSchema = new mongoose.Schema({
  pl_make: { type: String, required: false },
  pl_model: { type: String, required: false },
  pl_rate: { type: Number, multipleOf, required: false },
  pl_remark: { type: String, required: false },
  update_on: { type: String, required: false }
})

const cpl = db.model("pl", plSchema)
module.exports = cpl
