const mongoose = require("mongoose")
const db = require("../mdb")
const plSchema = new mongoose.Schema({
  make: { type: String, required: false },
  model: { type: String, required: false },
  rate: { type: Number, required: false },
  remark: { type: String, required: false },
  update_on: { type: String, required: false }
})

const cpl = db.model("product_list", plSchema)
module.exports = cpl
