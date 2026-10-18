const test = require('node:test');
const assert = require('node:assert');
const { calcularTotalComJuros } = require('./script.js');

test('Cálculo de Juros: R$ 100 com 10% de taxa deve resultar em R$ 110', () => {
  const resultado = calcularTotalComJuros(100, 0.10);
  assert.strictEqual(resultado, 110);
});