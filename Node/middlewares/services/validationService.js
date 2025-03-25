const Joi = require('joi');

const schemaUsuario = Joi.object({
    nome: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    login: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(6).required(),
});

const validarUsuario = (dados) => schemaUsuario.validate(dados);

module.exports = { validarUsuario };
