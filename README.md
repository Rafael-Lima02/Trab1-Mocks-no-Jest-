# Trab1-Mocks-no-Jest
# Criação de Mocks no Jest (Teste de Unidade)

Este repositório contém um exemplo simples da criação de um mocks usando o framework de testes Jest para realização de Testes de unidade em JavaScript.

## O que são mocks?

Objetos mock, também conhecidos como objetos simulados, são utilizados no desenvolvimento de software para substituir partes reais do sistema durante os testes. Eles permitem controlar o comportamento dessas partes substituídas, possibilitando o isolamento das unidades de código em testes e a verificação correta de suas interações com outras dependências.

Em resumo, os mocks são objetos simulados que substituem partes reais do sistema durante os testes. Eles proporcionam um controle preciso sobre o comportamento dessas partes, permitindo o isolamento das unidades de código em testes e a verificação adequada de suas interações com outras dependências. Essa abordagem contribui para um desenvolvimento de software mais confiável e eficiente

## Por que usar mocks?

- Isolamento: Os mocks permitem isolar as unidades de código em teste, garantindo que elas sejam testadas independentemente de suas dependências externas.
- Controle de comportamento: Com mocks, você pode definir o comportamento esperado das dependências durante os testes, facilitando a simulação de cenários específicos.
- Velocidade: Utilizar mocks pode acelerar a execução dos testes, já que partes reais do sistema podem ser substituídas por versões mais simples e rápidas.

## Como instalar Jest 
Depois ver certin esse trem 
https://oieduardorabelo.medium.com/jest-escrever-testes-nunca-foi-t%C3%A3o-divertido-5f0e1950ba10
https://github.com/aserg-ufmg/pub-sub-store
# 1. adicionando Jest (mesmo que: npm install jest)
yarn add jest
# 2. criando a pasta padrão de teste (é configurável)
mkdir __tests__
# 3. arquivos terminando em .test são o padrão
vim __tests__/example.test.js
# 4. rodando os testes (isso mesmo, jsdom já configurado)
./node_modules/.bin/jest --env=jsdom


## Criando mocks no Jest

O Jest oferece uma API simples e poderosa para a criação de mocks. Aqui está um exemplo básico de como criar um mock para uma dependência em um teste:

```javascript
// Importe o módulo ou dependência que você deseja criar o mock
const minhaDependencia = require('./minhaDependencia');

// Crie o mock usando a função jest.fn()
const mockMinhaDependencia = jest.fn();

// Substitua a dependência original pelo mock
jest.mock('./minhaDependencia', () => mockMinhaDependencia);

// Agora você pode definir o comportamento esperado do mock
mockMinhaDependencia.mockImplementation(() => {
  // Comportamento personalizado do mock
  return 'Valor simulado';
});

// Execute o teste da unidade que utiliza o mock
test('Meu teste com mock', () => {
  // ... Código do teste ...
});
