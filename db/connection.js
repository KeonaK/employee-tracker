const mysql = require("mysql");
//until a promise is satisfied 
const util = require("util");



// creates the connection object
const connection = mysql.createConnection({

    host: "localhost",
    port: 3000,
    user: "root",
    password: "",
    database: "employeeTrackerDB",
});


connection.connect((err) => {
    if(err) throw err;

    console.log("Employee Manager!");
})


connection.query = util.promisify(connection.query)

module.exports = connection;