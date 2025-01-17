import { body } from "express-validator";


const validateCreateUser = [
    body("name")
        .trim()
        .notEmpty().withMessage("Name is required")
        .isLength({ min: 2 }).withMessage("Name must be at least 2 characters long"),
    body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email format"),
    body("age")
        .optional()
        .isInt({ min: 0, max: 120 }).withMessage("Age must be a number between 0 and 120"),
];


const validateUpdateUser = [
    body("name")
        .optional()
        .trim()
        .isLength({ min: 2 }).withMessage("Name must be at least 2 characters long"),
    body("email")
        .optional()
        .trim()
        .isEmail().withMessage("Invalid email format"),
    body("age")
        .optional()
        .isInt({ min: 0, max: 120 }).withMessage("Age must be a number between 0 and 120"),
];


export { validateCreateUser, validateUpdateUser };
