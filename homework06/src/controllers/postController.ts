import * as postService from "../services/postService.js";


const getPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postService.getPostById(Number(id));
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        const newPost = await postService.createPost(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await postService.updatePost(Number(id), req.body);
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await postService.deletePost(Number(id));
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getPostsByUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const userPosts = await postService.getPostsByUserId(Number(user_id));
        if (!userPosts || userPosts.length === 0) {
            return res.status(404).json({ message: "No posts found for this user." });
        }
        res.json(userPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export { getPosts, getPostById, createPost, updatePost, deletePost, getPostsByUser };
