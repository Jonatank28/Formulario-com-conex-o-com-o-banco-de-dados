const express = require('express');
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login',
})

app.get("/", (req, res) => {
    db.query("INSERT INTO usuario (email, password) VALUES ('jonatankalmeidakk28@gmail.com', '1234567890') ", (err, result) => {
        if(err){
            console.log(err);
        }
        res.send(result)
    })
})

app.listen(3005, (req, res) => {
    console.log("Server rodando na porta 3005")
} )

