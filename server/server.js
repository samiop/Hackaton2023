//var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
const db = require('./user/user.model')
const mongoose = db.mongoose;
const dotenv = require('dotenv').config();
var fs = require('fs');
const connectDB = require('./database')

if(connectDB()){

    console.log("connexion successful");
}

const port = process.env.PORT || 5001;

var app = express();
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
 
app.set("view engine", "ejs");



var bodyParser = require('body-parser');

var test;
// The 2 following line are called middlewares
// Accepting only body type format (Content-type: json)
app.use(express.json());

//We will only accept form url encoded ( NOT raw/binary/form-data)
app.use(express.urlencoded({ extended: true }));
console.log("sami sami");
require('./user.route')(app);

console.log("ale ale");
// overriding express default error handler that return text/html( express assumes BY DEFAULT that you are using blade or twig templating engine)
//It needs to be be defined after routes or else it will not work


app.listen(port, () => `Server running on port ${port} `);

module.exports = app;
