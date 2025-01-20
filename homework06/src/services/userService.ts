import { appDataSource } from "./appDataSource";
import { User } from "../models/userModel.js";


const userRepository = appDataSource.getRepository(User);

const getAllUsers = async () => {
    return await userRepository.find();
};

const getUserById = async (id: number) => {
    return await userRepository.findOneBy({ id });
};

const createUser = async (userData: { name: string, email: string, age: number }) => {
    const user = userRepository.create(userData);
    return await userRepository.save(user);
};

const updateUser = async (id: number, userData: { name: string, email: string, age: number }) => {
    await userRepository.update(id, userData);
    return await userRepository.findOneBy({ id });
};

const deleteUser = async (id: number) => {
    const user = await userRepository.findOneBy({ id });
    if (user) {
        await userRepository.remove(user);
    }
    return user;
};


export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
