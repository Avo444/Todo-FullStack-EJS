const Joi = require("joi");

const patchTodoSchema = Joi.object({
    title: Joi.string().alphanum(),
    isDone: Joi.boolean(),
})
    .unknown(false)
    .required();

module.exports = patchTodoSchema;
