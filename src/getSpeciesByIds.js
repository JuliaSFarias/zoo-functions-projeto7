const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => { // spread operator no argumento de uma função que recebe vários parâmetros (cria um array com os parametros passados).
  if (ids.length === 0) {
    return [];
  }
  const animals = [];
  // percorre o array ids e verifica se id em species corresponde ao id do array: id
  ids.forEach((id) => {
    const object = species.find((specie) => specie.id === id);
    animals.push(object);
  });
  return animals;
};

module.exports = getSpeciesByIds;
