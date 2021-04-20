const mysql = require("mysql");
const inquirer = ("inquirer");
const db = require("./db/db");




//selections
// full list of employees
// employees by department 
//employees by manager
//add employee
//remove employee
//update employee roles
//update employee manager
//view all roles
//add role
//remove role

const start = () => {
inquirer
.prompt([
{
    type: "list",
    name: "choices",
    message: "What would you like to do? ",
    choices: ["View All Employees", "View All Employees "]

}

]


)


}