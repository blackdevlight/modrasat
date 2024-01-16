const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
const port = 3000 || process.port.env;

const startApp = app.listen(port, () =>{
    console.log(`modrasat application started`);
});
module.exports = {app, startApp};
