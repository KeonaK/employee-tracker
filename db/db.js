const connection = require("./connection");

class DB {
    constructor(connection){
        this.connection = connection;

    }
    //
    findAllEmployees(){
                   
// id first last title department salary | manager |                   
return this.connection.query("SELECT employees.id, employees.first_name, employees.last_name , roles.title AS title,  departments.name AS department, roles.salary AS salary FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id")
    }
}

//we are always passing in connection
module.exports = new DB(connection)