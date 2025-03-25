const jwt = require('jsonwebtoken');

const gerarToken = (usuario) => {
    return jwt.sign({ id: usuario.id, login: usuario.login }, 'seuSegredo', { expiresIn: '1h' });
};

const verificarToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send("Acesso negado!");

    try {
        const decoded = jwt.verify(token, 'seuSegredo');
        req.usuario = decoded;
        next();
    } catch (err) {
        res.status(400).send("Token inválido!");
    }
};

module.exports = { gerarToken, verificarToken };
