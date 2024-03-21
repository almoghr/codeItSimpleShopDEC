import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: "no description provided" },
    category: { type: String, required:true },
    image: { type: String, required: true },
    owner: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    // TODO - userID
  });
  
  export const Product = mongoose.model("Product", productSchema);
  