import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  des: {
    type: String,
  },
  tag: {
    type: String,
  },
  images: {
    type: Array,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
