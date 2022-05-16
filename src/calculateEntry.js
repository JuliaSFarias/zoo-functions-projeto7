const data = require('../data/zoo_data');

const { prices } = data;

// Recebe o array de visitantes (entrants) e retorna um objeto com a contagem de acordo com os seguintes critérios de classificação:
// filter filtra todos que atendem a condição (repare que as chaves de count recebem numbers)
function countEntrants(entrants) {
  const count = {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
  return count;
}

function calculateEntry(entrants) {
  // se entrants undefined ou as chaves de entrants tiverem tamanho 0:
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  // count recebe a função countEntrants com o parametro entrants. Retorna um obj com o valor a ser pago,
  // categorizados pela quantidade de pessoas por categorias (child, adult, senior) multiplicado pelo preço por categoria.
  const count = countEntrants(entrants);
  return count.child * prices.child + count.adult * prices.adult + count.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
