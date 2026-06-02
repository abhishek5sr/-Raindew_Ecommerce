const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const MONGODB_URI = process.env.MONGODB_URL;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(" connected to MongoDB."))
  .catch((err) => console.error(" connection error:", err));
const { Schema, model } = mongoose;
const ObjectID = mongoose.ObjectId;

const Banner = new Schema({
  title: { type: String, required: true },
  image_url: { type: String, required: true },
});

const Category = new Schema({
  name: { type: String, required: true },
  image_url: { type: String, required: true }
});

const Product = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  category: { type: ObjectID, ref: "Category", required: true },
});

const BannerModel = model("Banner", Banner);
const CategoryModel = model("Category", Category);
const ProductModel = model("Product", Product);

module.exports = {
  BannerModel: BannerModel,
  CategoryModel: CategoryModel,
  ProductModel: ProductModel,
};
