require("dotenv").config()
const express = require(express)
const app = express()
const path = require("path")
const cors = require("cors")
const Port = process.env.PORT || 3000
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.set("views", path.join(__dirname, "./views"))

app.listen(Port, () => console.log(`Server is running on port: ${Port}`))

app.get("/", (req, res) => {
    res.render("index", { title: "Welcome" });
  })