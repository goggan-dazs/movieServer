const express = require('express');
const router = express.Router();
const db = require("../models/db");

/* GET home page. */

router.get("/", function(req, res, next) {
    res.render('index', {
        locals: {
            title: "Movies Express", 
            path: req.path,
            showsData: db,
        },
        partials: {
            shows: "/partials/shows"
        }
    });
});


module.exports = router;