const connection = require("../config/connection.js");

const orm = {
    
    selectAll: (table, cb) => {
        connection.query('SELECT * FROM ' + table, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: (table, val, cb) => {
        connection.query("INSERT INTO " + table + " (burger_name) VALUES ('"+ val +"')", (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: (table, condition, cb) => {
        connection.query("UPDATE " + table + " SET ? Where ?", [
            {devoured: true},
            {id : condition}
        ], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;