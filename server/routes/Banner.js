const express = require("express");
const { BannerModel } = require("../mongo/db.js");
const BannerRouter = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Add Banner
BannerRouter.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title } = req.body;
    const image_url = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;
    await BannerModel.create({
      title: title,
      image_url: image_url,
    });
    res.status(201).json({ message: "Banner created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Edit Bannner
BannerRouter.put("/edit/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const image_url = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

    const updateBanner = await BannerModel.findByIdAndUpdate(
      id,
      {
        title,
        image_url,
      },
      { new: true },
    );

    if (!updateBanner) {
      res.status(404).json({ message: "banner not found" });
    } else {
      res.json({ message: "banner updated", data: updateBanner });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// delete banner
BannerRouter.delete("/delete/:id",async (req,res)=>{
    try{
        const {id}= req.params;
        const deleteBanner = await BannerModel.findByIdAndDelete({_id: id });
        if(!deleteBanner){
            res.status(404).json({message:"banner not deleted"})
        }
        else{
            res.json({message:"banner deleted"})
        }
    }
    catch(error){
        res.status(500).json({message:"internal server error"})
    }
});

//List  Banner

BannerRouter.get("/list", async (req,res) => {
  try {
    const Bannerlist = await BannerModel.find({});
     res.json({ Bannerlist });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

module.exports = {BannerRouter:BannerRouter};
