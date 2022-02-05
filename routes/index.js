const express = require('express');
const db = require("../models/db")
const router = express.Router();


/* GET home page. */

router.get("/", function(req, res, next) {
    res.render('index', {
        locals: {
            title: "Movies Express", 
            path: req.path,
            showsData: db,
            shows: false,
        },
        partials: {
            head: "/partials/shows"
        }
    });
});

router.post("/", function(req, res, next) {
    res.send("POST request from home page");
})



module.exports = router;