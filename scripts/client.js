console.log('in js');

$(document).ready(onReady);

const employeeList = [];

function onReady() {
  console.log('lets do this');

  $('#submitButton').on('click', addEmployee);
  $(document).on('click', '.deleteButton', deleteEmployee);
}

function addEmployee(e) {
  e.preventDefault();

  console.log('in add');

  const newEmployee = {
    FirstName: $('#fnInput').val(),
    LastName: $('#lnInput').val(),
    IDNum: Number($('#idInput').val()),
    Title: $('#titleInput').val(),
    Salary: Number($('#salaryInput').val()),
  };

  employeeList.push(newEmployee);
}

function deleteEmployee(params) {
  console.log('in delete');
}
