const express = require("express");
const cors = require("cors");
const path = require("path");
const { BannerRouter } = require("./routes/Banner.js");
const { CategoryRouter } = require("./routes/Category.js");
const { ProductRouter } = require("./routes/Product.js");

const app= express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/Banner",BannerRouter);
app.use("/Category", CategoryRouter);
app.use("/Product",ProductRouter);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});