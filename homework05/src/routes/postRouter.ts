import express from "express";
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController';
import { validateCreatePost, validateUpdatePost } from "../validators/postValidator.ts";
import handleValidationErrors from "../middleware/validate.ts";


const router = express.Router();

router.route('/')
    .get(getPosts)
    .post(validateCreatePost, handleValidationErrors, createPost);

router.route('/:id')
    .get(getPostById) 
    .put(validateUpdatePost, handleValidationErrors, updatePost)
    .delete(deletePost);


export default router;
