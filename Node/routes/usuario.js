const express = require("express");
const router = express.Router();

const usuarios = require('../models/usuarios');

router.get('/user: id', usuarios.buscarUsuarios);

router.post('/user', usuarios.inserirUsuario);

router.put('/user:id', usuarios.atualizarUsuario);

router.delete('/user:id', usuarios.deletarUsuario);

module.exports = router;