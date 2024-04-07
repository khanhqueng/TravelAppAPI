require('dotenv').config();
const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const db = require('./db/User')
const app = express();
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { createUsers, getUsers } = require('./APIcontroller/PUTapi')
const port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
db.connect((err) => {
    if (err) {
        console.log("Unable to connect db")

    }
    console.log("Success");
})
app.post('/api/createUser', createUsers)
app.get('/', (req, res) => {
    res.send("Hello api")
})
app.get('/api/getUsers', getUsers)
