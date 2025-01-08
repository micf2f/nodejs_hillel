import User from '../models/userModel';


const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, age },
            { new: true } 
        );
        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export { getUsers, getUserById, createUser, updateUser, deleteUser };
