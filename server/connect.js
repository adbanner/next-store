const mysql = require("mysql")
require('dotenv').config();

const db = mysql.createConnection({
    
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

db.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    db.query("SELECT * FROM users", function (err, result, fields) {
        if (err) console.log(err.message);
        console.log(result);
      });
    
})