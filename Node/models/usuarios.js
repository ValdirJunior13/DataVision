const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const criarBancoETabela = async () => {
    const connection = await pool.getConnection();
    try {
        await connection.query("CREATE DATABASE IF NOT EXISTS nome_do_banco");
        await connection.query("USE nome_do_banco");
        await connection.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                login VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("Banco de dados e tabela criados com sucesso.");
    } catch (err) {
        console.error("Erro ao criar banco de dados/tabela:", err);
    } finally {
        connection.release();
    }
};

const inserirUsuario = async (req, res) => {
    const { nome, email, login, password } = req.body; 
    const sql = `INSERT INTO usuarios (nome, email, login, password) VALUES (?, ?, ?, ?)`;
    const valores = [nome, email, login, password];
    try {
        const [result] = await pool.query(sql, valores);
        console.log("Usuário inserido com sucesso. ID:", result.insertId);
        res.status(201).send("Usuário inserido com sucesso.");
    } catch (err) {
        console.error("Erro ao inserir usuário:", err.message);
    }
};

const atualizarUsuario = async (req, res) => {
    const { id, nome, login, password } = req.body; 
    const sql = 'UPDATE usuarios SET nome = ?, email = ?, login = ?, password = ? WHERE id = ?';
    const valores = [nome, login, password, id];
    try {
        const [result] = await pool.query(sql, valores);
        console.log("Usuário atualizado com sucesso. Linhas afetadas:", result.affectedRows);
        res.status(200).send("Usuário atualizado com sucesso.");
    } catch (err) {
        console.error("Erro ao atualizar usuário:", err.message);
    }
}

const deletarUsuario = async (req, res) => {
    const {id} = req.body;
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    const valores = [id];
    try {
        const [result] = await pool.query(sql, valores);
        console.log("Usuário deletado com sucesso. Linhas afetadas:", result.affectedRows);
        res.status(200).send("Usuário deletado com sucesso.");
    } catch (err) {
        console.error("Erro ao deletar usuário:", err.message);
    }

}

const buscarUsuarios = async (req, res) => {
    const {id} = req.body;
    let sql = 'SELECT * FROM usuarios';
    let valores = [];
    
    if (id){
        sql += ' WHERE id = ?';
        valores = [id];
    }
    try {
        const [result] = await pool.query(sql, valores);
        console.log(result);
        res.status(200).send(result);
    } catch (err) {
        console.error("Erro ao buscar usuário(s):", err.message);
    }

}

module.exports = {
    inserirUsuario,
    buscarUsuarios,
    deletarUsuario,
    atualizarUsuario,
}