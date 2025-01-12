import express from "express";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';
import { getPostsByUser } from "../controllers/postController";


const router = express.Router();

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById) 
    .put(updateUser)
    .delete(deleteUser);

router.get("/:user_id/posts", getPostsByUser);


export default router;
