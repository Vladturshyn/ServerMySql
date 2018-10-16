const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
var connection  = require('express-myconnection');

app.use(connection(mysql,{
         host:'eu-cdbr-west-02.cleardb.net',
         user:'b0ed182fd67118',
         password:'ac84ac6f',
         port:3306,
         database:'heroku_46730d7d959b023'
     },'single')
);

const usersRoute = require('./routes/user');

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', usersRoute);

const port = process.env.PORT || 4000;

app.listen(port, console.log(`Server running on port ${port}`));