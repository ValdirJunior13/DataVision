const RegisterUseCase = require("../../use-cases/register");
const UpdateUseCase = require("../../use-cases/update");
const DeleteUseCase = require("../../use-cases/delete");
const UserRepository = require("../../repositories/userRepository");

const userRepository = new UserRepository();
const registerUseCase = new RegisterUseCase(userRepository);
const updateUseCase = new UpdateUseCase(userRepository);
const deleteUseCase = new DeleteUseCase(userRepository);

class UsuarioController {

    static async getUserById(req, res) {
        const { id } = req.params;

        try {
            const usuario = await userRepository.findById(id);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            res.status(200).json(usuario);
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao buscar usuários', error });
        }
    }

    static async createUser(req, res) {
        const { nome, email, login, senha } = req.body;

        try {
            const { user } = await registerUseCase.execute({ nome, email, login, senha });

            res.status(201).json({ id: user.id });
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao criar usuário', error });
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params;
        const { senhaAntiga, senhaNova } = req.body;

        try {
            await updateUseCase.execute({ id, senhaAntiga, senhaNova });

            res.status(200).json({ message: 'Usuário atualizado com sucesso' });
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar usuário', error });
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;
        const { senha } = req.body;
        console.log(id, senha)

        try {
            console.log('controller')
            await deleteUseCase.execute({ id, senha });

            res.status(200).json({ message: 'Usuário deletado com sucesso' });
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao deletar usuário', error });
        }
    }

}

module.exports = UsuarioController;  