var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },

    insertOne: function(name, cb) {
        orm.insertOne(name, function(res) {
            cb(res);
        });
    },

    updateOne: function(burger_id, cb) {
        orm.updateOne(burger_id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;