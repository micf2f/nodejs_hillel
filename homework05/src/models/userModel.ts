import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
}, {collection: "users"});

const User = mongoose.model('users', userSchema);

export default User;
