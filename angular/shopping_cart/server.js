/**
 * Created by Reziko on 9/6/2016.
 */

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var connection = require("express-myconnection");
var app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended:true
}));

//Hosting static files
app.use(express.static(__dirname + '/'));
console.log("Static files initialized...");

//create Sql Connection
app.use(connection(mysql,{
    host   : 'localhost',
    user   : 'ui',
    password: 'ui1234',
    database: 'shopping_cart',
},'request'));

app.get("/service/customer",function (req, res, next) {
    //Array to store to store dynamic parameters
    var ids = [];
    /*for (var i=0 ;i<params.length; i++{
         ids.push(req.params[params[i]];
      }
     */
    var query = "SELECT * FROM customer" ;
    req.getConnection(function (err, connection) {
        if(err) return next(err);

        connection.query(query,ids,function (err, results) {
            if(err){
                console.log(err);
                return next ("Mysql error, check your query" );
            }
            res.json(results);
        });
    });
});

app.get("/service/customer/:customerid",function (req, res, next) {
    //Array to store dynamic parameters
    var ids = [];
    var customerid = req.params.customerid;
    ids.push(customerid);

    /*for (var i=0 ;i<params.length; i++{
     ids.push(req.params[params[i]];
     }
     */
    var query = "SELECT * FROM customer where customerid = ?";
    req.getConnection(function (err, connection) {
        if(err) return next(err);

        connection.query(query,ids,function (err, results) {
            if(err){
                console.log(err);
                return next ("Mysql error, check your query" );
            }
            res.json(results);
        });
    });
});

//Setting up the static files for hosting
//app.use(express.static(__dirname + '/'));

//Routing
app.get('/', function (req, res) {
    res.redirect('/views/index.html');
});

app.get('/landing', function (req, res) {
    res.send('In landing page');
});

app.get('/home', function (req, res) {
    res.redirect('/views/index.html');
});

app.get('/electronics', function (req, res) {
    res.redirect('/views/electronics.html');
});

app.get('/game', function (req, res) {
    res.redirect('/views/game.html');
});
// End of routing

//launching application on localhost:8080;
app.listen(8080, function () {
    console.log('server loaded on port 8080');
});