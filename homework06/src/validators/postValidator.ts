import { body } from "express-validator";


const validateCreatePost = [
    body("authorId")
        .trim()
        .notEmpty().withMessage("Author is required"),
    body("title")
        .trim()
        .notEmpty().withMessage("Title is required")
        .isLength({ min: 5, max: 100}).withMessage("Title must be at least 5 characters long"),
    body("content")
        .trim()
        .notEmpty().withMessage("Content is required")
        .isLength({ min: 10, max: 500 }).withMessage("Content must be at least 10 characters long"),
    body("status")
        .notEmpty().withMessage("Status is required")
        .isIn(["draft", "published", "archived"]).withMessage("Status must be one of: draft, published, archived"),
];


const validateUpdatePost = [
    body("title")
        .optional()
        .trim()
        .isLength({ min: 5, max: 100 }).withMessage("Title must be at least 5 characters long"),
    body("content")
        .optional()
        .trim()
        .isLength({ min: 10, max: 500 }).withMessage("Content must be at least 10 characters long"),
    body("status")
        .optional()
        .isIn(["draft", "published", "archived"]).withMessage("Status must be one of: draft, published, archived"),
];


export { validateCreatePost, validateUpdatePost };
