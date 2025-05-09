const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors()) // for control web security
app.use(express.json())  //parsing http request json data

const port = 5000
const db = mysql.createConnection({
    host: "1.34.108.11",
    user: "neomichael",
    password: "mysqlMic678#",
    database: "students"
})

app.post('/add/_user', (req, res) => {
    sql = " INSERT INTO sdudent_details (name, email, age, gender) VALUES (?,?,?,?)";
    const VALUES = {
        req.body.name,
        req.body.email,
        req.body.age,
        req.body.gender
    }
    )

app.listen(port, () => {
    console.log('listening on port 5000')
})