class PasswordShouldBeDifferentError extends Error {
  constructor() {
    super('Senha nova deve ser diferente da senha antiga');
  }
}

module.exports = PasswordShouldBeDifferentError;