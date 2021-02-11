require("dotenv").config();
const express = require("express");
const app = express();
//const path = require("path");
//const cors = require("cors");
const Port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
//const cpppl = require("./views/cpppl");
//const testview = require("./views/testview");

const mongoose = require("mongoose")
mongoose.connect(process.env.DB_CPP,{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

const productListSchema = new Schema({
    make:{type: String},
    product:{type: String},
    model:{type: String},
    price:{type: Number},
    remark:{type: String},
    updateOn: {type: Date}
},{collection: 'product_list'});

const ProductList = mongoose.model("ProductList", productListSchema);

app.get("/api/product-list", async (req,res) => {
    try {
        const docs = await ProductList.find();
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
});

app.post("/new-product", async (req,res) => {
    const item = {
        make: req.body.enteredMake,
        product: req.body.enteredProduct,
        model: req.body.enteredModel,
        price: req.body.enteredRate,
        remark: req.body.enteredRemark,
        updateOn: req.body.times
    }

    try {
        const mdata = new ProductList(item);
        const insertDoc = await mdata.save();
        res.json({
            status:true,
            message: "Data inserted " +insertDoc._id,
        });
    } catch (err) {
        res.json({
            status: false,
            message: err
        });
    }
});
//app.use("/cpppl",cpppl)
//app.use("/testview",testview)

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.listen(Port, () => console.log(`Server is running on port: ${Port}`));