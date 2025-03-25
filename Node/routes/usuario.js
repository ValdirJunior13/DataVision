const express = require("express");
const router = express.Router();
const usuarios = require("../models/usuarios");
const { verificarToken } = require("../models/jwt");


router.get('/user/:id', verificarToken, usuarios.buscarUsuarios);
router.post('/user', usuarios.inserirUsuario);
router.put('/user/:id', verificarToken, usuarios.atualizarUsuario);
router.delete('/user/:id', verificarToken, usuarios.deletarUsuario);

module.exports = router;
