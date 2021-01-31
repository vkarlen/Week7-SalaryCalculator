$(document).ready(onReady);

const employeeList = [
  // {
  //   FirstName: 'Charlie',
  //   LastName: 'Kelly',
  //   IDNum: 3,
  //   Title: 'Janitor',
  //   Salary: 53,
  // },
  // {
  //   FirstName: 'Frank',
  //   LastName: 'Renolds',
  //   IDNum: 794,
  //   Title: 'Troll',
  //   Salary: 100000,
  // },
  // {
  //   FirstName: 'Mac',
  //   LastName: 'McDonald',
  //   IDNum: 256,
  //   Title: 'Security',
  //   Salary: 40000,
  // },
];
const monthlyMax = 20000;
// setting max as variable in case it needs to be changed in the future

function onReady() {
  displayEmployees();

  $('#empForm').submit(addEmployee);
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

  // empty inputs and update table
  emptyInputs();
  displayEmployees();
} // end addEmployee

function deleteEmployee() {
  // console.log('in delete');

  // find employee by their id in the array
  for (i in employeeList) {
    if (employeeList[i].IDNum === Number(this.value)) {
      // delete employee from array
      employeeList.splice(i, 1);
      i = employeeList.length;
    }
  }

  // update employee display
  displayEmployees();
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
  // console.log('in display');

  // empty employee list
  // re add list of employees
  $('#employeeTable').empty();
  for (person of employeeList) {
    $('#employeeTable').append(`<tr>
      <td class="nameCol">${person.FirstName}</td>
      <td class="nameCol">${person.LastName}</td>
      <td>${person.IDNum}</td>
      <td>${person.Title}</td>
      <td>$${person.Salary}</td>
      <td>
        <button class="deleteButton" value="${person.IDNum}">X</button>
      </td>
    </tr>`);
  }
  // showed John and a few others the dynamic value/id on the delete button
  //  so that may show up on a few assignments

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
  if (monthlyCost > monthlyMax) {
    $('#displayTotal').css('background-color', 'red');
  } else {
    $('#displayTotal').css('background-color', '#e8eae6');
  }

  // empty current total and append new one
  $('#displayTotal').empty();
  $('#displayTotal').append(`$${monthlyCost}`);
} // end calculateMonthly
