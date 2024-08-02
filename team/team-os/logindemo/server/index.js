const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/register", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    const sqlInsert = "INSERT INTO userinfo (name, email, password) VALUES (?,?,?)";
    db.query(sqlInsert, [name, email, password], (err, result) =>{
        console.log(result);
        console.log(err);
    });
}); 


app.post("/api/login", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert = 'SELECT * FROM userinfo WHERE email = ? AND password = ?';
    db.query(sqlInsert, [email, password], (err, result) => {
        if(err){
            console.log(err);
        }
        if(result.length === 0){ // need to clean up here
            //res.send({message: "Invalid User!"});
        }
        //res.send(result);
        res.send({message: "Valid User!"});

    })
}); 

app.listen(3001, () => {
    console.log("Running on Port 3001");
});
