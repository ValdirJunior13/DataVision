class UserAlreadyExistsError extends Error {
  constructor() {
    super("Usuario já existe com esse email ou login"); 
  }
}

module.exports = UserAlreadyExistsError;