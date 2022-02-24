const express = require('express');
const router = express.Router();

router.route("/")
.all((req, res) =>
{
    res.status(404).send('error');
})

module.exports = router;
