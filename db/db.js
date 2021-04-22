const connection = require("./connection");
const cTAble = require("console.table");

class DB {
    constructor(connection){
        this.connection = connection;

    }
    // * View departments, roles, employees

    // find all employees
    findAllEmployees(){
                   
// id first last title department salary | manager |                   
return this.connection.query("SELECT employees.id, employees.first_name, employees.last_name , roles.title AS title,  departments.name AS department, roles.salary AS salary FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id");

}

//find departments 
findAllDepartments(){
    return this.connection.query("SELECT * FROM departments");
}

//find roles 
findAllRoles(){
    return this.connection.query("SELECT roles.title FROM roles");
    roles.map
}

// * Add departments, roles, employees
addDepartments(departments){
    return this.connection.query("INSERT INTO departments SET ?", departments);
}

addRoles(roles){
    return this.connection.query("INSERT INTO roles SET ?", roles);
}

addEmployee(employees){
return this.connection.query("INSERT INTO employees SET ?",employees);
}


// * Update employee roles
updateEmployeeRole(roleId, employeeId){
    return this.connection.query("UPDATE employees SET role_id ? WHERE id = ?", roleId,employeeId)
     
      }
}



//we are always passing in connection
module.exports = new DB(connection)