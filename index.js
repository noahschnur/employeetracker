const inquirer = require("inquirer");
require("console.table");
const connection = require("./db/connection");

function runTracker() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.start) {
        case "View all departments":
          viewDepartment();
          break;
        case "View all roles":
          viewRole();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update employee role":
          updateRole();
          break;
      }
    });
}

function viewDepartment() {
  let query = `SELECT * FROM employee_db.department`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("all the employees");
    console.table(res);
    runTracker();
  });
}

function viewRole() {
    let query = `SELECT * FROM employee_db.role`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runTracker();
    });
}

function viewEmployees() {}

function addDepartment() {}

function addRole() {}

function addEmployee() {}

function updateRole() {}

runTracker();
