const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const object = species.find((specie) => specie.name === animal); // find encontra o primeiro item que atende a condiçao specie.name === animal.
  return object.residents.every((resident) => resident.age >= age); // every retorna true se todos os elementos atendem a condição, do contrário: false.
}

module.exports = getAnimalsOlderThan;
