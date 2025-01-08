import Post from '../models/postModel';


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        console.log(posts);
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
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
        const { authorId, title, content, status, createdAt, updatedAt } = req.body;
        const newPost = new Post({ authorId, title, content, status, createdAt, updatedAt });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { authorId, title, content, status, updatedAt } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { authorId, title, content, status, updatedAt },
            { new: true } 
        );
        if (!updatedPost) return res.status(404).json({ message: "Post not found" });
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) return res.status(404).json({ message: "Post not found" });
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getPostsByUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const userPosts = await Post.find({ authorId: user_id });
        if (!userPosts || userPosts.length === 0) {
            return res.status(404).json({ message: "No posts found for this user." });
        }
        res.json(userPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export { getPosts, getPostById, createPost, updatePost, deletePost, getPostsByUser };
