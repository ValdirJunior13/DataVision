const { verificarSenha } = require("../middlewares/services/authService");

class DeleteUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    
    async execute({ id, senha }) {
        try {
            const usuario = await this.userRepository.findById(id);
            if(!usuario) {
                throw new Error('Usuário não encontrado');
            }
            const senhaCorreta = await verificarSenha(senha, usuario.password);

            if(!senhaCorreta) {
                throw new Error('Senha incorreta');
            }

            await this.userRepository.delete(id);
        } catch (error) {
            throw new Error(`Error deleting node: ${error.message}`);
        }
    }
}

module.exports = DeleteUseCase;