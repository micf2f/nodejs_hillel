import Post from "../models/postModel.js";


const getAllPosts = async () => {
    return await Post.find();
};

const getPostById = async (id) => {
    return await Post.findById(id);
};

const createPost = async (postData) => {
    const post = new Post(postData);
    return await post.save();
};

const updatePost = async (id, postData) => {
    return await Post.findByIdAndUpdate(id, postData, { new: true });
};

const deletePost = async (id) => {
    return await Post.findByIdAndDelete(id);
};

const getPostsByUserId = async (userId) => {
    return await Post.find({ authorId: userId });
};


export { getAllPosts, getPostById, createPost, updatePost, deletePost, getPostsByUserId };
