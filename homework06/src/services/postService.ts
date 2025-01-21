import { appDataSource } from "./appDataSource";
import { Post } from "../models/postModel";
import { User } from "../models/userModel";


const postRepository = appDataSource.getRepository(Post);
const userRepository = appDataSource.getRepository(User);

const getAllPosts = async () => {
    return await postRepository.find();
};

const getPostById = async (id: number) => {
    return await postRepository.findOneBy({ id });
};

const createPost = async (postData: { title: string, content: string, status: 'draft' | 'published' | 'archived', authorId: number }) => {
    const user = await userRepository.findOneBy({ id: postData.authorId });
    if (!user) {
        throw new Error("User not found");
    }

    const post = postRepository.create({
        ...postData,
        authorId: user
    });

    return await postRepository.save(post);
};

const updatePost = async (id: number, postData: { title?: string, content?: string, status?: 'draft' | 'published' | 'archived' }) => {
    const post = await postRepository.findOneBy({ id });
    if (!post) {
        throw new Error("Post not found");
    }

    Object.assign(post, postData);
    return await postRepository.save(post);
};

const deletePost = async (id: number) => {
    const post = await postRepository.findOneBy({ id });
    if (!post) {
        throw new Error("Post not found");
    }
    return await postRepository.remove(post);
};

const getPostsByUserId = async (userId: number) => {
    return await postRepository.find({ where: { authorId: { id: userId } } });
};


export { getAllPosts, getPostById, createPost, updatePost, deletePost, getPostsByUserId };
