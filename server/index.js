const express = require('express');
const app = express();
const mysql = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
})


app.listen(3001, () => {
    console.log("Server rodando na porta 3001")
} )