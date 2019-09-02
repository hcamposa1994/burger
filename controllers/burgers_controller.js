const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll( data => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["name"], [req.body.burger_name], () => {
        console.log("adding burger: " + req.body.burger_name);
        res.status(200).end();
    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;