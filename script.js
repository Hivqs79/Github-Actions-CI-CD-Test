function calcularTotalComJuros(valor, taxa) {
  return valor + (valor * taxa);
}

if (typeof module !== 'undefined') {
  module.exports = { calcularTotalComJuros };
}