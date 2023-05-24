const { minhaFuncao } = require("../minhaFuncao");

// Criando um mock para a função somar
// e definindo o comportamento esperado para o mock da função somar
jest.mock("../utils/somar.js", () => ({
  somar: jest.fn().mockReturnValue(5),
}));

// Teste da função minhaFuncao
test("minhaFuncao deve retornar o resultado de somar multiplicado por 10", () => {
  const result = minhaFuncao(2, 3);

  expect(result).toBe(50);
});
