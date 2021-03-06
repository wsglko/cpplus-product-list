require("dotenv").config()
const express = require("express")
const router = express.Router()

const cpl = require("../model/cpl")

router.get("/api/cppplist", async (req, res) => {
  try {
    const docs = await cpl.find();
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

router.post("/new-cppplist", async (req,res) => {
  const data = req.body;
  try {
    const mdata = new cpl(data)
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

router.post("/new-test", async (req,res) => {
  const data = req.body;
  try {
    const mdata = new cpl(data)
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