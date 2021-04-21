const mysql = require("mysql");
const inquirer = ("inquirer");
const db = require("./db/db");
const { findAllEmployees, findAllDepartments, findAllRoles, addEmployee, addRoles, addDepartments, updateEmployeeRole } = require("./db/db");





start();
 
async function start(){
    
const getChoices = await inquirer.prompt([
{
    type: "list",
    name: "choices",
    message: "What would you like to do? ",
    choices: ["View all employees", "View all departments", "View all roles","Add employee", "Add roles", "Add departments", "Update role", "Exit"]
}
])

switch(getChoices){
    case "View all employees": 
        findAllEmployees();
        break;
    case "View all departments":
        findAllDepartments();
        break;
    case "View all roles": 
        findAllRoles();
        break;
    case "Add employee": 
        addEmployee();
        break;
    case "Add roles": 
        addRoles();
        break;
    case "Add departments": 
        addDepartments();
        break;
    case "Update role": 
        updateEmployeeRole();
        break;
    case "Exit":
        process.exit();
    default: 
        break;

}
}
