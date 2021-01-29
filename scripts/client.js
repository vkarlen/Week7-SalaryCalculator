$(document).ready(onReady);

const employeeList = [];

function onReady() {
  $('#submitButton').on('click', addEmployee);
  $(document).on('click', '.deleteButton', deleteEmployee);
}

function addEmployee(e) {
  e.preventDefault();

  employeeList.push({
    FirstName: $('#fnInput').val(),
    LastName: $('#lnInput').val(),
    IDNum: Number($('#idInput').val()),
    Title: $('#titleInput').val(),
    Salary: Number($('#salaryInput').val()),
  });

  //console.log('in add');
  //console.log(employeeList);
  emptyInputs();
  displayEmployees();
} // end addEmployee

function deleteEmployee() {
  console.log('in delete');
} // end deleteEmployees

function emptyInputs() {
  //console.log('in empty');

  $('#fnInput').val('');
  $('#lnInput').val('');
  $('#idInput').val('');
  $('#titleInput').val('');
  $('#salaryInput').val('');
} // end emptyInputs

function displayEmployees() {
  console.log('in display');
  // empty employee list
  // re add list of employees
  $('#employeeTable').empty();
  for (person of employeeList) {
    $('#employeeTable').append(`<tr>
      <td>${person.FirstName}</td>
      <td>${person.LastName}</td>
      <td>${person.IDNum}</td>
      <td>${person.Title}</td>
      <td>${person.Salary}</td>
      <td>
        <button class="deleteButton">Delete</button>
      </td>
    </tr>`);
  }
}
