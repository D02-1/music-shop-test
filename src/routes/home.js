const express = require('express');
const router = express.Router();
const path = require('path');
const app = express()

const { goHome } = require('../controllers/homeController.js');

router.route("/")
.get(goHome)

module.exports = router;