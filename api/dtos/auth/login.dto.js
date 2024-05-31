const Joi = require("joi");

const LoginDto = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
module.exports = LoginDto;
