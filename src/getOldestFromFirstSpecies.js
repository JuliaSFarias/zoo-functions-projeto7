const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário,
// e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

function getOldestFromFirstSpecies(id) {
  const responsibleAnimal = employees.find((item) => item.id === id);
  const animal = responsibleAnimal.responsibleFor[0]; // Primeira especie gerenciada pelo funcionário.
  const foundAnimal = species.find((item) => item.id === animal); // Com find busca em species o o objeto relacionado a especie gerenciada pelo funcionario.

  let animalAge = 0;
  let animalSelected = [];
  foundAnimal.residents.forEach((resident) => {
    if (animalAge < resident.age) {
      animalAge = resident.age;
      animalSelected = [resident.name, resident.sex, resident.age];
    }
  });
  return animalSelected;
}

module.exports = getOldestFromFirstSpecies;
