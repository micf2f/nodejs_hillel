import express from "express";

import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';
import { getPostsByUser } from "../controllers/postController";
import { validateCreateUser, validateUpdateUser } from "../validators/userValidator";
import handleValidationErrors from "../middleware/validate";


const router = express.Router();

router.route('/')
    .get(getUsers)
    .post(validateCreateUser, handleValidationErrors, createUser);

router.route('/:id')
    .get(getUserById)
    .put(validateUpdateUser, handleValidationErrors, updateUser)
    .delete(deleteUser);

router.get("/:user_id/posts", getPostsByUser);


export default router;
