const data = require('../data/zoo_data');

const { employees } = data;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

// requisito 1 e 2:
function isManager(id) {
  const yes = true;
  const no = false;
  const isAManager = employees.find((manager) => manager.id === id); // encontra o primeiro elemento de employees que possui como valor o id fornecido.
  if (managers.includes(isAManager.id)) { // verifica se managers contem o id passado.
    return yes;
  }
  return no;
}

// requisitos 3 e 4:
function getRelatedEmployees(managerId) {
  if (managers.includes(managerId)) {
    const idManager = employees.filter((employee) => employee.managers.includes(managerId)); // verifica os colaboradores que possuem em manager o id passado e retorna num array.
    // console.log(idManager);
    const responsibleFor = [];
    idManager.forEach((collaborator) => { // depois de encontrar os objs correspondentes ao id de gerente passado, retorna os nomes contidos nesses objs.
      responsibleFor.push(`${collaborator.firstName} ${collaborator.lastName}`);
      // console.log(responsibleFor);
    });
    return responsibleFor;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); // se a condiçao do if(linha 22) não for atendida, cai nessa linha.
}

getRelatedEmployees(stephanieId);

module.exports = { isManager, getRelatedEmployees };

// Retorna true se o id passado for de um gerente;
// Retorna false se o id passado não for de um gerente;
// Se o id passado for de um gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
// Se o id passado não for de um gerente, dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".
