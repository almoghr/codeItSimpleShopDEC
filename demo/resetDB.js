import fs from 'fs';
import mongoose from "mongoose"
import { User } from '../models/User.js'
import { Product } from '../models/Product.js';
import { DB_NAME, DB_CLUSTER, DB_USERNAME, DB_PASS } from '../config/config.js';


const resetDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASS}@${DB_CLUSTER}/${DB_NAME}`);
        console.log(1)
        await User.deleteMany({})
        console.log(1)
        await Product.deleteMany({})
        const usersFromJSON = JSON.parse(fs.readFileSync('users.json', 'utf8'))
        const productsFromJSON = JSON.parse(fs.readFileSync('products.json', 'utf8'))
        const usersInDB = await User.insertMany(usersFromJSON)

        productsFromJSON.forEach(p => p["owner"] = usersInDB[0]._id)

        const productsInDB = await Product.insertMany(productsFromJSON)
        console.log(usersInDB)
        console.log(productsInDB)

    } catch(e){
        console.log(e)
    }
}

resetDB()