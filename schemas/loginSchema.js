const Joi = require("joi");

const loginSchema = Joi.object({
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

module.exports = loginSchema;
