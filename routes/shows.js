const express = require('express');
const router = express.Router();
const db = require("../models/db");
//GET Home Page


router.get("/", function (req, res, next) {
    res.render("index", {
        locals: {
            title: "List of Movies/Shows", 
            path: req.path,
            showsData: db,
            shows: `<h2>Rendered Show Data</h2>`
        },
        partials: {
            head: "/partials/shows"
        }
    });
});

router.get("/:title", function(req, res, next) {
    const { title } = req.params;
    const movie = db.find((f) => f.Title === title);

    res.send(movie.Plot);
})


router.post("/", function (req, res, next) {
    res.send("POST request from home page")
})

module.exports = router;