# CEFET/MG - Engenharia de Software 2023/1

# Roteiro Prático - Criação de Mocks no Jest (Teste de Unidade)

### Alunos:

- Filipe da Silva Rocha
- Gabriela Guerra Malvar Pereira
- Rafael Augusto da Fonseca Lima
- William Silva de Almeida

Este repositório contém um exemplo simples da criação de um mocks usando o framework de testes Jest para realização de Testes de unidade em JavaScript.

## O que são mocks?

Objetos mock, também conhecidos como objetos simulados, são utilizados no desenvolvimento de software para substituir partes reais do sistema durante os testes. Eles permitem controlar o comportamento dessas partes substituídas, possibilitando o isolamento das unidades de código em testes e a verificação correta de suas interações com outras dependências.

Em resumo, os mocks são objetos simulados que substituem partes reais do sistema durante os testes. Eles proporcionam um controle preciso sobre o comportamento dessas partes, permitindo o isolamento das unidades de código em testes e a verificação adequada de suas interações com outras dependências. Essa abordagem contribui para um desenvolvimento de software mais confiável e eficiente

## Por que usar mocks?

- Isolamento: Os mocks permitem isolar as unidades de código em teste, garantindo que elas sejam testadas independentemente de suas dependências externas.
- Controle de comportamento: Com mocks, você pode definir o comportamento esperado das dependências durante os testes, facilitando a simulação de cenários específicos.
- Velocidade: Utilizar mocks pode acelerar a execução dos testes, já que partes reais do sistema podem ser substituídas por versões mais simples e rápidas.

## Como instalar Jest

### 1. Adicionando o Jest como dependência

```shellscript
yarn add jest
```

ou

```shellscript
npm install jest
```

### 2. Criando a pasta padrão de teste (é configurável)

```shellscript
mkdir __tests__
```

### 3. Criar arquivo de teste (padrão arquivos com extensão .test)

```shellscript
vim __tests__/example.test.js
```

### 4. Rodando os testes (isso mesmo, jsdom já configurado)

```shellscript
./node_modules/.bin/jest --env=jsdom
```

## Criando mocks no Jest

O Jest oferece uma API simples e poderosa para a criação de mocks. Aqui está um exemplo básico de como criar um mock para uma dependência em um teste:

```javascript
// Importe o módulo ou dependência que você deseja criar o mock
const minhaDependencia = require("./minhaDependencia");

// Crie o mock usando a função jest.fn()
const mockMinhaDependencia = jest.fn();

// Substitua a dependência original pelo mock
jest.mock("./minhaDependencia", () => mockMinhaDependencia);

// Agora você pode definir o comportamento esperado do mock
mockMinhaDependencia.mockImplementation(() => {
  // Comportamento personalizado do mock
  return "Valor simulado";
});

// Execute o teste da unidade que utiliza o mock
test("Meu teste com mock", () => {
  // ... Código do teste ...
});
```

## Agora um exemplo prático

A ideia aqui é testar uma função `minhaFuncao()` que recebe dois valores `a` e `b` e retorna a soma desses dois valores multiplicado por `10`. Essa função utiliza uma dependência `somar.js` que realiza a soma.

### Para começar

1. Acesse o diretório e rode o comando `yarn` para instalar as dependência do projeto (no caso o jest como já foi explicado anteriormente).

2. Rode o comando `yarn start` e você terá uma saída como:

```shellscript
$ yarn start
yarn run v1.22.5
warning package.json: No license field
$ node index.js
110
Done in 0.21s.
```

O valor `110` ali é justamente a execução da `minhaFuncao` no arquivo `index.js`:

```javascript
console.log(minhaFuncao(5, 6));
```

3. Agora vamos rodar o teste unitário para a função `minhaFuncao` com o comando `yarn test`.

A saída será algo como:

```shellscript
$ jest
 PASS  src/__tests__/minhaFuncao.test.js
  √ minhaFuncao deve retornar o resultado de somar multiplicado por 10 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.831 s, estimated 1 s
Ran all test suites.
Done in 2.97s.
```

Isso significa que a suíte de testes foi executada e 1 teste passou do total de 1.

Aqui está o código do teste `minhaFuncao.test.js`:

```javascript
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
```

Perceba que a função `somar` teve seu valor mockado. Com retorno fixo em `5`. Isso evita que um teste para uma função específica (nesse caso `minhaFuncao`), dependa da execução de um outro código (`somar.js`). Assim evitando problemas e também aplicando a unicidade dos testes para testarem somente a função a qual foi especificada.

### Pronto, executamos um teste com uma dependência mockada.
