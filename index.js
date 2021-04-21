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
    choices: ["View all employees", "View all departments", "View all roles","Add employee", "Add roles", "Add departments", "Update role", "Exit"]
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
    case "Add roles": 
        addRolePrompts();
        
        break;
    case "Add departments": 
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
            message: "Please choose a employee role. ",
            choices: roles.map(role => ({value: role.id, name: role.title}))
        }
    ]);
    db.addEmployee(newEmployee);
    console.log("The employee has been added!")
    start();
    
}
async function addRolePrompts(){
    // user to select a new role to add
    const roles = await db.findAllRoles();
    const newRole = await inquirer.prompt([
        {
            type: "list",
            name: "department",
            message: "What is the employee's role?",
        },
        {}

    ])
}

// addDepartmentsPrompts()
// updateEmployeeRolePrompts()