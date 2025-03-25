const fetch = require('node-fetch');

const criarUsuario = async () => {
    try {
        const response = await fetch('http://localhost:3050/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: "Maria",
                email: "maria@email.com",
                login: "mariadev",
                password: "123456"
            })
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const data = await response.text(); 
        console.log("✅ Resposta do servidor:", data);
    } catch (error) {
        console.error("❌ Erro ao criar usuário:", error.message);
    }
};

criarUsuario();
