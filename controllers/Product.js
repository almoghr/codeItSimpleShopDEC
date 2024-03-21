import { createProductService, deleteProductService, getAllProductsService, getSingleProductService } from "../services/Product.js";

export const getAllProductsController =  async (req, res) => {
    try {
      const allProducts = await getAllProductsService();
      if (allProducts.length === 0 || !allProducts) {
        return res.status(204).send({ message: "No products found" });
      }
      return res.status(200).send(allProducts);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  export const getSingleProductController =  async (req, res) => {
    try {
      const id = req.params.id;
      const product = await getSingleProductService(id);
      if (!product) {
        return res.status(404).send({ message: "no product found" });
      }
      return res.status(200).send(product);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  export const createProductController = async (req, res) => {
    try {
      const productForm = { ...req.body };
      const product = createProductService(productForm)
      await product.save();
      res.status(200).send(product);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  export const updateProductController = async (req, res) => {
    const productAllowedUpdates = ["price", "title", "description"];
  
    const updates = Object.keys(req.body);
  
    const isValidOperation = updates.every((update) =>
    productAllowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send({ message: "Invalid updates" });
    }
  
    try {
      const id = req.params.id;
      const product = await getSingleProductService(id)
  
      if (!product) {
        return res.status(404).send({ message: "product does not exist" });
      }
  
      updates.forEach((update) => (product[update] = req.body[update]));
      await product.save();
      return res.status(200).send(product);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  export const deleteProductController =  async (req, res) => {
    try {
      const id = req.params.id;
      const deletedProduct = await deleteProductService(id);
      if (!deletedProduct) {
        return res.status(404).send({ message: "no product found" });
      }
      return res.status(200).send(deletedProduct);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }