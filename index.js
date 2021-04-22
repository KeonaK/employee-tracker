const mysql = require("mysql");
const inquirer = require("inquirer");
const db = require("./db/db");





start();
 
 async function start(){
 const response = await  inquirer.prompt([
{
    type: "list",
    name: "choices",
    message: "What would you like to do? ",
    choices: ["View all employees", "View all departments", "View all roles","Add employee", "Add role", "Add department", "Update role", "Exit"]
}
])

switch(response.choices){
    case "View all employees": 
        const employeeData = await db.findAllEmployees();
        console.table(employeeData);
        start();
        break;
    case "View all departments":
        const departmentData = await db.findAllDepartments();
        console.table(departmentData);
        start();
        break;
    case "View all roles": 
        const roleData = await db.findAllRoles();
        console.table(roleData);
        start();
        break;
    case "Add employee": 
        addEmployeePrompts();

        break;
    case "Add role": 
        addRolePrompts();
        
        break;
    case "Add department": 
        addDepartmentsPrompts();
       
        break;
    case "Update role": 
        updateEmployeeRolePrompts();
       
        break;
    case "Exit":
       
        process.exit();
    default: 
        break;

}
}

async function addEmployeePrompts(){

    const roles = await db.findAllRoles();
    const departments = await db.findAllDepartments();
    const newEmployee = await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name? "
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
       
        {
            type: "list",
            name: "role_id",
            message: "Please choose an employee title. ",
            choices: roles.map(role => ({name: role.title, value: role.id }))
        },
        
    ]);
    db.addEmployee(newEmployee);
    console.log("The employee has been added!");
    start();
    
}
async function addRolePrompts(){
    // user to select a new role to add
    
    const newRole = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What new role would you like to add? ",
        }

    ])
    db.addRoles(newRole);
    console.log("The role has now been added!");
    start();
}


async function addDepartmentsPrompts(){
    const newDepartment = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the new department you want to add? ",
        }
    ])
    db.addDepartments(newDepartment);
    console.log("The department has now been added!");
    start();
}
// updateEmployeeRolePrompts()