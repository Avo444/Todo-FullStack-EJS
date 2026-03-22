const Joi = require("joi");

const registerSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(12).required().messages({
        "string.alphanum": "Name must contain only letters or numbers!",
        "string.min":
            "The name must consist of a minimum of 3 letters or numbers.",
        "string.max":
            "The name must consist of a maximum of 12 letters or numbers.",
        "any.required": "Name is required!",
    }),

    email: Joi.string().email().required().messages({
        "string.email": "Invalid email format!",
        "any.required": "Email is required!",
    }),

    password: Joi.string()
        .pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        )
        .required()
        .messages({
            "string.pattern.base":
                "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character (@$!%*?&).",
            "any.required": "Password is required!",
        }),
});

module.exports = registerSchema;
