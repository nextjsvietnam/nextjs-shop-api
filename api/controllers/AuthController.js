/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const AuthService = require("../services/auth.service");
const { LoginDto } = require("../dtos/auth.dto");
module.exports = {
  login: async (req, res) => {
    try {
      const { error, value } = LoginDto.validate(req.body, {
        abortEarly: true,
      });
      if (error) {
        return res.badRequest(error);
      }
      const payload = AuthService.login(value);
      return res.success(payload);
    } catch (error) {
      return res.internalServerError(error);
    }
  },
  register: async (req, res) => {
    try {
      return res.success(req.body);
    } catch (error) {
      return res.internalServerError(error);
    }
  },
};
