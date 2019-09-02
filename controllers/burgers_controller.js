const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll( burger_data => {
        // console.log(burger_data);
        res.render("index", {burger_data});
    });
});

router.post("/burgers", (req, res) => {
    burger.insertOne(req.body.burger_name, () => {
        // console.log("adding burger: " + req.body.burger_name);
        res.redirect("/");
    });
});

router.put("/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.redirect("/");
    });
});

module.exports = router;