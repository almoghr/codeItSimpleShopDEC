import { deleteUserService, getAllUserService, getSingleUserService } from "../services/User.js";

export const getAllUsersController =  async (req, res) => {
    try {
      const allUsers = await getAllUserService();
      if (allUsers.length === 0 || !allUsers) {
        return res.status(204).send({ message: "No users found" });
      }
      return res.status(200).send(allUsers);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  export const getSingleUserController =  async (req, res) => {
    try {
      const id = req.params.id;
      const user = await getSingleUserService(id);
      if (!user) {
        return res.status(404).send({ message: "no user found" });
      }
      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  export const createUserController = async (req, res) => {
    try {
      const userForm = { ...req.body };
      const user = createUserService(userForm)
      await user.save();
      res.status(200).send(user);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  export const updateUserController = async (req, res) => {
    const userAllowedUpdates = ["age", "hobby"];
  
    const updates = Object.keys(req.body);
  
    const isValidOperation = updates.every((update) =>
      userAllowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send({ message: "Invalid updates" });
    }
  
    try {
      const id = req.params.id;
      const user = await getSingleUserService(id)
  
      if (!user) {
        return res.status(404).send({ message: "user does not exist" });
      }
  
      updates.forEach((update) => (user[update] = req.body[update]));
      await user.save();
      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }

  export const deleteUserController =  async (req, res) => {
    try {
      const id = req.params.id;
      const deletedUser = await deleteUserService(id);
      if (!deletedUser) {
        return res.status(404).send({ message: "no user found" });
      }
      return res.status(200).send(deletedUser);
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }