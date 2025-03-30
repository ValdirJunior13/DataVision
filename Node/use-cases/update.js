const { hashSenha, verificarSenha } = require("../middlewares/services/authService")
const PasswordShouldBeDiferentError = require("./errors/passwordShouldBeDiferentError")
const CurrentPasswordIncorrectError = require("./errors/currentPasswordIncorrectError")

class UpdateUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ id, senhaAntiga, senhaNova }) {
        if(senhaAntiga === senhaNova) {
            throw new PasswordShouldBeDiferentError();
        }

        const usuario = await this.userRepository.findById(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const mesmaSenha = await verificarSenha(senhaAntiga, usuario.password);

        if (!mesmaSenha) {
            throw new CurrentPasswordIncorrectError();
        }

        const senha_hash = await hashSenha(senhaNova);

        await this.userRepository.update(id, { senha_hash });
    }
}

module.exports = UpdateUseCase;