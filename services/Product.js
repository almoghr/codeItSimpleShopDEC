import { Product } from "../models/Product.js";

export const getAllProductsService = () => {
    return Product.find({}).populate('owner','-__v').exec();
}
export const getAllProductsOfOtherUsersService = (id) => {
    return Product.find({_id: { $ne: ObjectId(id) } }).populate('owner','-__v').exec();
}
export const getAllOfMyProductsService = (id) => {
    return Product.find({_id:id});
}

export const getSingleProductService = (id) => {
    return  Product.findOne({ _id: id });
}

export const createProductService = (form) => {
    return new Product(form);
}

export const deleteProductService = (id) => {
    return  Product.findOneAndDelete({ _id: id });
}