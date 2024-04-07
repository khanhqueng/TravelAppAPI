const connection = require('../db/User')
function queryPromise(sql, value = []) {
    return new Promise((resolve, reject) => {
        connection.query(sql, value, (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        })
    })
}
let createUsers = async (req, res) => {
    try {
        var { Hoten, Email, Password } = req.body;
        if (!Hoten || !Email || !Password) {
            throw new Error("Please fill info");
        }
        const issue = [Hoten, Email, Password];
        const SQL = "INSERT INTO user(Hoten , Email, Password) VALUES (?,?,?)";
        const result = await queryPromise(SQL, issue);
        res.status(201).send({ issue });



    } catch (err) {
        res.status(401).send({ err });
    }
}
module.exports = { createUsers }