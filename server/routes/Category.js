const express = require("express");
const { CategoryModel } = require("../mongo/db.js");
const CategoryRouter = express.Router();
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

// Add category
CategoryRouter.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, slug } = req.body;
    const image_url = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;
    await CategoryModel.create({
      name: name,
      image_url: image_url,
    });
    res.json({ message: "Category created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Edit category
CategoryRouter.put("/edit/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const image_url = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : undefined;

    const updateData = { name, slug };
    if (image_url) updateData.image_url = image_url;

    const updateCategory = await CategoryModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true },
    );

    if (!updateCategory) {
      res.status(404).json({ message: "category not found" });
    } else {
      res.json({ message: "category updated", data: updateCategory });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// Delete category
CategoryRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategory = await CategoryModel.findByIdAndDelete(id);

    if (!deleteCategory) {
      res.status(404).json({ message: "category not found" });
    } else {
      res.json({ message: "category deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// List all categories
CategoryRouter.get("/list", async (req, res) => {
  try {
    const Categorylist = await CategoryModel.find({});
    res.json({ Categorylist });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// GET /Category/list/grocery
CategoryRouter.get("/list/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const Categorylist = await CategoryModel.find({
      name: { $regex: new RegExp(name, "i") },
    });
    res.json({ Categorylist });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

module.exports = { CategoryRouter: CategoryRouter };
