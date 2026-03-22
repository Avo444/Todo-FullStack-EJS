const Joi = require("joi");

const postTodoSchema = Joi.object({
    title: Joi.string().required(),
});

module.exports = postTodoSchema;
