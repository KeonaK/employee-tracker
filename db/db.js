const connection = require("./connection");

class DB {
    constructor(connection){
        this.connection = connection;

    }
    findAllEmployees(){
        //sql selection 
return this.connection.query("")
    }
}

//we are always passing in connection
module.exports = new DB(connection)