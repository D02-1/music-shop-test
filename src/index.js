// ***********************************************************************************
// express aus den node-modulen in dieser Datei nutzen
const express = require('express');
// body-parserModul analysiert die JSON-, Puffer-, Zeichenfolgen- und URL-codierten Daten, die auf HTTP POSTAnfrage übermittelt werden
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const basicAuth = require('express-basic-auth');
const router = express.Router();
const path = require('path')
const fs = require('fs')

require('dotenv').config();
const mongoose = require('mongoose');


// const databaseURL = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
const db = mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true})
//console.log(db)
const app = express();

const port = process.env.PORT || 8000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




const goHome = require('./routes/home.js');
app.use("/", goHome);

const recordsRoutes = require('./routes/records.js');
app.use("/records", recordsRoutes);

const usersRoutes = require('./routes/users.js');
app.use("/users", usersRoutes);

const ordersRoutes = require('./routes/orders.js');
app.use("/orders", ordersRoutes);

const goDashboard = require('./routes/dashboard.js');
app.use("/dashboard", goDashboard);

app.use(express.static(`${__dirname}/public`))

const errorRoutes = require('./routes/errors.js');
app.use('*', errorRoutes);





app.listen(port, () => console.log("Server läuft auf port" , port));