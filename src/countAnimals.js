const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// se especie esta definida, mas sexo está indefinido:
function animalIsDefined(animal) {
  if (animal.specie !== undefined && animal.sex === undefined) {
    const foundSpecie = species.find((specie) => specie.name === animal.specie); // * recebe uma especie como parametro e faz a busca pelo primeiro elemento de species que corresponde a esse parametro.
    return foundSpecie.residents.length; // contando quantos objetos tem em residentes, retorna seu tamanho, que consequentemente diz quantos animais tem da especie em questão.
  }
  // se especie e sexo estão definidos:
  if (animal.specie !== undefined && animal.sex !== undefined) {
    const foundSpecie = species.find((specie) => specie.name === animal.specie); // *
    const animalSex = foundSpecie.residents.filter((item) => item.sex === animal.sex); // filtra todos os elementos de residents que tem o sex === ao parametro passado (animal.sex)
    return animalSex.length; // retorna o tamanho de animalSex que recebeu apenas os elementos que correspondem ao parametro sex passado.
  }
}
function countAnimals(animal) {
// quando não há parametros definidos retorna um objeto com as especies e suas quantidades.
  if (animal === undefined) {
    const listAnimals = {};
    species.forEach((specie) => {
      // a chave do objeto vira o nome do animal e seu valor vira a quantidade de animais daquela especie, definidos por specie.residents.length.
      listAnimals[specie.name] = specie.residents.length;
    });
    return listAnimals;
  }
  // retorna a função referente aos parametros definidos.
  return animalIsDefined(animal);
}

module.exports = countAnimals;
