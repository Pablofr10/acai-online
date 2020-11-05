import Vue from 'vue';

Vue.filter('real', function(valor: number) {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    });
  } else {
    return '';
  }
});
