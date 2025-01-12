import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { 
        type: String, 
        enum: ["draft", "published", "archived"], 
        default: "draft" 
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { collection: "posts" });

const Post = mongoose.model('posts', postSchema);

export default Post;
