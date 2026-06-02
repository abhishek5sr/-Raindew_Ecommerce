const express = require("express");
const { ProductModel} = require("../mongo/db.js");
const ProductRouter = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Add product
ProductRouter.post("/add", upload.array("images", 5), async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const images = req.files ? req.files.map(f => `${req.protocol}://${req.get("host")}/uploads/${f.filename}`) : [];
    
    await ProductModel.create({
      name,
      description,
      price,
      images,
      category
    });
    res.json({message:"product added sucessfully"})
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

//edit product
ProductRouter.put("/edit/:id", upload.array("images", 5), async (req, res) => {
  try {
    const {id} = req.params;
    const { name, description, price, category } = req.body;
    
    const updateData = { name, description, price, category };
    if (req.files && req.files.length > 0) {
        updateData.images = req.files.map(f => `${req.protocol}://${req.get("host")}/uploads/${f.filename}`);
    }

    const updateProduct = await ProductModel.findByIdAndUpdate(id, updateData);

    if(!updateProduct){
      res.status(404).json({message:"product not found"});
    }
    else{
      res.json({message:"product updated"});
    }
    }
      catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

//delete product 
ProductRouter.delete("/delete/:id", async (req, res) => {
  try {
   const {id} = req.params;
   const deleteProduct =  await ProductModel.findByIdAndDelete(id);
    if(!deleteProduct){
      res.status(404).json({message:"product not found"});
    }
    else{
      res.json({message:"product deleted"});
    }

  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

//list product 
ProductRouter.get("/list", async (req, res) => {
  try {
   const ProductList =  await ProductModel.find({}).populate("category");
   res.json({ProductList});
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

//Product details
ProductRouter.get("/details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id).populate("category");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ product });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {ProductRouter:ProductRouter};