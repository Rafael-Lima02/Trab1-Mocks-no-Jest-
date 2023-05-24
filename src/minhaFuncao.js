const { somar } = require("./utils/somar");

// Função que tem dependência de somar.js
function minhaFuncao(a, b) {
  const resultado = somar(a, b);

  return resultado * 10;
}

module.exports = {
  minhaFuncao,
};
