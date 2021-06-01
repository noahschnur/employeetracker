const inquirer = require('inquirer');
require('console.table');
const connection = require("./db/connection")


function runTracker() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: "What would you like to do?",
            choices: ["View all employees", "View employees by department", "View employees by manager", "Add employee", "Remove employee", "Update employee role", "Update employee manager"],
        }
    ]).then((answers) => {
        switch(answers.start) {
            case 'View all employees': 
                viewEmployees()
                break;
            case 'View employees by department':
                viewDepartment()
                break;
                }
    })
};


function viewEmployees() {
let query= `SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, employees.manager_id FROM employee_db.employees`

connection.query(query, (err, res)=>{
    if (err) throw err
    console.log("all the employees")
    console.table(res)
    runTracker();
})

}

// if View all employees by dept
//     db.query(`SELECT * FROM employees WHERE department_id =?`, (err, values) => {
    // if (err) {
    //     console.log(err);
    // }
    // console.table([first_name, last_name], values)
// });

// if View all employees by manager
//     db.query(`SELECT * FROM employees WHERE manager_id =?`, (err, values) => {
    // if (err) {
    //     console.log(err);
    // }
    // console.table([first_name, last_name], values)
// });

// if Add employees
//     db.query(`INSERT INTO employees(id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)`
// console.table([
// ]);

//// if Remove an employee
//     db.query(`DELETE FROM employees WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
// console.log(result);
// ]);

// if UPDATE employee role
// console.table([
//     `INSERT INTO employees(id, role_id)`
// ]);

// if UPDATE employee manager
// console.table([
//     `INSERT INTO employees(id, manager_id)`
// ]);

runTracker();