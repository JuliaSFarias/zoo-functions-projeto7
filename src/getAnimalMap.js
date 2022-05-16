const data = require('../data/zoo_data');

const { species } = data;

// função que retorna arrays dentro de um objeto.
function getLocAnimals() {
  return {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
}

// Requisitos 1 e 2:
function speciesByLocation() {
  const locAnimals = getLocAnimals();
  species.forEach((specie) => {
    locAnimals[specie.location].push(specie.name);
  });
  return locAnimals;
}

// restante dos requisitos
function residentsByLocations(sorted, sex) {
  const locAnimals = getLocAnimals();
  species.forEach((specie) => {
    let { residents } = specie;

    if (sex !== undefined) {
      residents = residents.filter((resident) => resident.sex === sex);
    }
    let residentsNames = residents.map((resident) => resident.name);
    if (sorted) {
      residentsNames = residentsNames.sort(); // retorna o nome dos residentes de forma ordenada.
    }
    const specieNames = {};
    specieNames[specie.name] = residentsNames;
    locAnimals[specie.location].push(specieNames);
  });
  return locAnimals;
}

function getAnimalMap(options) {
// Sem parâmetros, retorna animais categorizados por localização;
// Sem a opção includeNames especificada, retorna animais categorizados por localização;
  if (options === undefined || options.includeNames === undefined) {
    return speciesByLocation();
  }
  // Com a opção includeNames: true especificada, retorna nomes de animais;
  // Com a opção sorted: true especificada, retorna nomes de animais ordenados;
  // Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
  // Com a opção sex: 'female' ou sex: 'male' especificada e a opção sorted: true especificada,
  // retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
  if (options.includeNames) {
    return residentsByLocations(options.sorted, options.sex);
  }
}

module.exports = getAnimalMap;
