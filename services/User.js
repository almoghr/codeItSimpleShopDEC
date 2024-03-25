import { User } from "../models/User.js";

export const getAllUserService = () => {
    return User.find({});
    // create logic of pagination
}

export const getSingleUserService = (id) => {
    return  User.findOne({ _id: id });
}

export const getSingleUserByName = (name) => {
    const user =  User.findOne({ name: name }).select("+password").exec();
    console.log(user);
    return user;
}

export const createUserService = (form) => {
    return new User(form);
}

export const deleteUserService = (id) => {
    return  User.findOneAndDelete({ _id: id });
}