const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')
const { GiConsoleController } = require('react-icons/gi')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors)
app.use(express.json())

const port = 5000
const db = mysql.createConnection({
    host: "192.168.2.30",
    user: "root",
    password:"mysqlMic678#",
    database: "sakila"
})

app.listen(port, ()=>{
    console.log('listening on port 5000')
})

