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

function viewEmployees() {
    let query = `SELECT * FROM employee_db.employees`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        runTracker();
    });
}

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'newdept',
      message: 'What is the new department called?'
    }
  ]).then((answer)=> {
    let query = `INSERT INTO employee_db.department (department.name) VALUES (?)`;
    let params = [answer.newdept];
    connection.query(query, params, (err, res) => {
        if (err) throw err
        console.table(res);
        runTracker();
    });
  });
}

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is the new role?"
    },
    {
      type: 'input',
      name: 'salary',
      message: "What is the new salary?"
    },
    {
      type: 'input',
      name: 'deptId',
      message: "What is department is the new role in?"
    }
  ]).then((answer) => {
    let query = `INSERT INTO employee_db.role (role.title, role.salary, role.department_id) VALUES (?, ?, ?)`;
    let params = [answer.title, answer.salary, answer.deptId];
    connection.query(query, params, (err, res) => {
      if (err) throw err
      console.table(res);
      runTracker();
    });
  });
}

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: "What is the new employee's first name?"
    },
    {
      type: 'input',
      name: 'lastName',
      message: "What is the new employee's last name?"
    },
    {
      type: 'input',
      name: 'role',
      message: "What is the new employee's role id number?"
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the new employee's manager's id number?"
    }
  ]).then((answer) => {
    let query = `INSERT INTO employee_db.employees (employees.first_name, employees.last_name, employees.role_id, employees.manager_id) VALUES (?, ?, ?, ?)`;
    let params = [answer.firstName, answer.lastName, answer.role, answer.managerId];
    connection.query(query, params, (err, res) => {
      if (err) throw err
      console.table(res);
      runTracker();
    });
  });
}

function updateRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'newRole',
      message: "What is the employee's new role id number?"
    },
    {
      type: 'input',
      name: "newManagerId",
      message: "What is the employee's new manager's id number?"
    },
    {
      type: 'input',
      name: 'whichEmployee',
      message: "Which employee are you updating? (Please input id number)"
    }
  ]).then((answer) => {
    let query = `UPDATE employee_db.employees SET employees.role_id = ?, employees.manager_id = ? WHERE employees.id = ?`;
    let params = [answer.newRole, answer.newManagerId, answer.whichEmployee];
    connection.query(query, params, (err, res) => {
        if (err) throw err
        console.table(res);
        runTracker();
    });
  });
}

runTracker();
