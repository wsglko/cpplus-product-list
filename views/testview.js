require("dotenv").config()
const express = require("express")
const router = express.Router()

const test = require("../model/test")

router.get("/api/test", async (req, res) => {
  try {
    const docs = await test.find();
    res.json({
      status: true,
      message: "Data is available now",
      data: docs
    });
    } catch (err) {
      res.json({
        status: false,
        message: err
      })
    }
})

router.post("/new-test", async (req,res) => {
  const data = req.body;
  try {
    const mdata = new test(data)
    const insertdoc = await mdata.save()
    console.log("Data inserted " +insertdoc._id);
    res.json({
      status: true,
      message: "Data inserted"
    })
  } catch (err) {
    console.log(err)
    res.json({status: false, message:err})
  }
})

module.exports = router;