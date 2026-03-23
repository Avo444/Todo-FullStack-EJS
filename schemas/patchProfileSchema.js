const Joi = require("joi");

const patchProfileSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(12).messages({
        "string.alphanum": "Name must contain only letters or numbers!",
        "string.min":
            "The name must consist of a minimum of 3 letters or numbers.",
        "string.max":
            "The name must consist of a maximum of 12 letters or numbers.",
    }),
    password: Joi.string()
        .pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        )

        .messages({
            "string.pattern.base":
                "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character (@$!%*?&).",
        }),

    oldPassword: Joi.string()
        .pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        )

        .messages({
            "string.pattern.base":
                "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character (@$!%*?&).",
        }),
})
    .unknown(false)
    .required();

module.exports = patchProfileSchema;
