const express = require('express')
const app = express()
const port =  8080
const bodyParser = require('body-parser')
const fs = require("fs");

let allUrls = fs.readFileSync("./urls.txt").toString('utf8');
let urlsArray = allUrls.split("\n");

// use it before all route definitions
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

require('./routes.js')(app, urlsArray);
app.listen(port, () => console.log(`JasperDog is listening on port ${port}!`))


