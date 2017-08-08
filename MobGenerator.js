var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var qs = require('qs');
var Promise = require('Promise');
var shuffle = require('shuffle-array'),

    var app = express();

var names = ['Cyane', 'Joseph', 'Stéphane', 'Amélie', 'Amelberge', 'grégory', 'Igor', 'Vincent', 'Suzanne', 'Patrick', 'Nico'];
var adjs = ['le chausse-pied', '3-tétons', 'l\'éviscérateur', 'casse bonbon', 'le nettoyeur', 'long-couteau', 'face de pet', 'aux pieds-velus'];

app.use("/stylesheets", express.static(__dirname + "/stylesheets"));
app.use("/javascript", express.static(__dirname + "/javascript"));
app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    generateName()
        .then(function (mobName) {
            res.render('index', {
                title: 'Cyanus Generator',
                message: mobName
            })
        });
});


function generateName() {
    return new Promise(function (resolve, reject) {
        resolve(shuffle.pick(names) + ' ' + shuffle.pick(adjs));
    });
}