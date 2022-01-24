const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("You have hit GET /posts endpoint");
});

module.exports = router;
