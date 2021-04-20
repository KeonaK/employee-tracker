const mysql = ("mysql");


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