const express = require('express');
const router = express.Router();
const path = require('path');
const app = express()

const { goDashboard } = require('../controllers/dashboardController.js');

router.route("/dashboard")
.get(goDashboard)

module.exports = router;