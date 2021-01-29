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

  // delete employee line
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
  // calculate and update Monthly Cost
  calculateMonthly();
} // end displayEmployees

function calculateMonthly() {
  let monthlyCost = 0;

  // add each salary to the total
  for (people of employeeList) {
    monthlyCost += Math.round(people.Salary / 12);
  }
  //console.log(monthlyCost);

  // If total monthly cost exceeds $20,000, make cell background red
  if (monthlyCost > 20000) {
    console.log('ouch');
    $('#displayTotal').css('background-color', 'red');
  } else {
    $('#displayTotal').css('background-color', '');
  }

  // empty current total and append new one
  $('#displayTotal').empty();
  $('#displayTotal').append(`Total Monthly Cost: $${monthlyCost}`);
} // end calculateMonthly
