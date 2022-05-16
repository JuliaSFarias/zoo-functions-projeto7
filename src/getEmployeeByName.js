const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const checkName = (empl) => empl.firstName === employeeName || empl.lastName === employeeName;
  // função checkName, recebe empl(employee abreviado) como parametro e retorna true se atende as condicoes firstName ou lastName
  // com find retorna o primeiro objeto que tem como lastName ou firstName, o checkName.
  return employees.find(checkName);
}

module.exports = getEmployeeByName;
