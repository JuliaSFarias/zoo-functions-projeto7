const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;

const days1 = Object.keys(hours); // pega somente as chaves de hours, ou seja, os dias.
const namesSpecies = species.map((specie) => specie.name); // pega somente o nome das especies no objeto species.

// monta o array com o nome dos animais em exibição referente a cada dia.
function exhibitionAnimals(day) {
  const exhibition = [];
  species.forEach((elemento) => {
    if (elemento.availability.includes(day)) {
      exhibition.push(elemento.name);
    }
  });
  return exhibition;
}

// monta a frase a ser exibida que indica horário de funcionamento.
function scheduleOfficeHour(day) {
  const operation = hours[day];
  const officeHour = `Open from ${operation.open}am until ${operation.close}pm`;
  return officeHour;
}

// junta os animais em exibição e a frase relacionada ao funcionamento em um objeto só.
// define um condição especifica caso parametro seja Monday.
function objectOfficeHourAndAnimals(day) {
  const returnMonday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  if (day === 'Monday') {
    return returnMonday;
  }
  const days = {
    officeHour: scheduleOfficeHour(day),
    exhibition: exhibitionAnimals(day),
  };
  return days;
}

// pega o objeto criado acima e associa a um outro objeto que tem como chave o nome do dia.
// requisitos 1 e 2.
function objectDayAndAnimals() {
  const obj = {};
  days1.forEach((parametro) => {
    obj[parametro] = objectOfficeHourAndAnimals(parametro);
  });
  return obj;
}

// Atendendo ao requisito 3 e a quando o parametro for Monday:
function getDay(parametro) {
  const obj = {};
  if (parametro === 'Monday') {
    obj[parametro] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    const days = {
      officeHour: scheduleOfficeHour(parametro),
      exhibition: exhibitionAnimals(parametro),
    };
    obj[parametro] = days;
  }
  return obj;
}
// verifica o nome da especie que foi passada e retorna os dias de exibição, requisito 4.
function getName(parametro) {
  const nameSpecie = species.find((name) => name.name === parametro);
  return nameSpecie.availability;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) { // Já verifica se o parametro é undefined, null ou 0, ou seja, se é igual a false(dentro do if).
    return objectDayAndAnimals();
  }
  if (days1.includes(scheduleTarget)) {
    return getDay(scheduleTarget);
  }
  if (namesSpecies.includes(scheduleTarget)) {
    return getName(scheduleTarget);
  }
  return objectDayAndAnimals(); // se Não entrar em nenhuma das duas condições acima, retorna essa função.
}

module.exports = getSchedule;

// Testes:
// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
// Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
// Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
// Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.
