const express = require("express");
const router = express.Router();
const usuarioController = require("./controllers/usuarioController.js");

router.get('/user/:id', usuarioController.getUserById);
router.post('/user', usuarioController.createUser);
router.put('/user/:id', usuarioController.updateUser);
router.delete('/user/:id', usuarioController.deleteUser);

module.exports = router;