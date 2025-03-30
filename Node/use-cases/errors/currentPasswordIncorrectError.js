class CurrentPasswordIncorrectError extends Error {
    constructor() {
      super('Senha atual incorreta');
    }
  }
  
  module.exports = CurrentPasswordIncorrectError;