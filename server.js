import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { DB_CLUSTER, DB_NAME, DB_PASS, DB_USERNAME, port } from "./config/config.js";
import { createUserController, deleteUserController, getAllUsersController, getSingleUserController, updateUserController } from "./controllers/User.js";
import { createProductController, deleteProductController, getAllProductsController, getSingleProductController, updateProductController } from "./controllers/Product.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("Client/dist"));

app.get("/getAllUsers", getAllUsersController);
app.get("/users/:id", getSingleUserController);
app.post("/createUser/", createUserController);
app.put("/updateUser/:id", updateUserController);
app.delete("/deleteUser/:id", deleteUserController);

app.get("/getAllProducts", getAllProductsController);
app.get("/products/:id", getSingleProductController);
app.post("/createProduct/", createProductController);
app.put("/updateProduct/:id", updateProductController);
app.delete("/deleteProduct/:id", deleteProductController);


app.get("*", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/Client/dist/index.html");
});

app.listen(port, async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASS}@${DB_CLUSTER}/${DB_NAME}`);
    console.log(`Example app listening on port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
