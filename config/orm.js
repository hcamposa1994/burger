var connection = require("../config/connection.js");

var orm = {
    
    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(name, cb) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: name
        }, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(burger_id, cb) {
        connection.query("UPDATE burgers SET ? Where ?", [
            {devoured: true},
            {id : burger_id}
        ], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;