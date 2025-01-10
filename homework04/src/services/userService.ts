import User from "../models/userModel.js";


const getAllUsers = async () => {
    return await User.find();
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};


export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
