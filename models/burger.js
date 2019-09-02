const orm = require("../config/orm.js");

const burger = {
    selectAll: cb => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },

    insertOne: (name, cb) => {
        orm.insertOne("burgers", name, cb);
    },

    updateOne: (burger_id, cb) => {
        orm.updateOne("burgers", burger_id, res => {
            cb(res);
        });
    }
};

module.exports = burger;