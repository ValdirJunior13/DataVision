const { hashSenha } = require("../middlewares/services/authService")
const UserAlreadyExistsError = require("./errors/userAlreadyExistsError")

class RegisterUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ nome, email, login, senha }) {

        const password_hash = await hashSenha(senha);
        const userWithSameEmail = await this.userRepository.findByEmail(email);

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError();
        }

        const user = await this.userRepository.create({ nome, email, login, password_hash });

        return { user };
    }
}

module.exports = RegisterUseCase;