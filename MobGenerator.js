var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var qs = require('qs');
var Promise = require('promise');
var shuffle = require('shuffle-array');

var app = express();

var names = ['Cyane', 'Joseph', 'Stéphane', 'Amélie', 'Amelberge', 'grégory', 'Igor', 'Vincent', 'Suzanne', 'Patrick', 'Nico'];
var menNames = ['René','Alain','Georges','Michel','Boniface','Pierrot','Bertrand','Robert','Roger','Nino','Antonio','Jacques','Bernard','Bebert','René','Jo','Jojo','Cricri','Christophe','Zozo','Ernest','Coco','Auguste','Augustin','Lucien','Lulu','Albert','Amadou','André','Dédé','Bruno','Benoit','Beubeu','Claude','Cloclo','Denis','Edmont','Emilio','Emmanuel','Manu','Félix','Eugène','Florent','Gaspard','Geoffroy','Georges-Henry','Guy','Henri','Albert-Emmanuel','Guy-Alain','Hubert','Hub','Jean','Jean-Baptiste','Jean-Charles','Jean-Claude','Jean-Joseph','Jean-Louis','Jean-Marc','Jean-Marie','Jean-Maurice','Jean-Paul','Lambert','Lionel','Marcel','Moussa','Momo','Mohamed','Oscar','Pedro','Raoul','Roand','Rodolphe','Umberto','Wilfired'];
var adjs = ['le chausse-pied', '3-tétons', 'l\'éviscérateur', 'casse bonbon', 'le nettoyeur', 'long-couteau', 'face de pet', 'aux pieds-velus', 'le filou','le renard','barracuda','les dents longues','raton','le musicien','le boxeur','la limande','le grand','le petit','le bègue','le gros','le maigre','le gruyère','le Marseillais','le Parisien','l incorruptible','la gâchette','le fruitier','tic-tac','le fossoyeur','le faussaire','le bleu','le rouge','le noir','le gris','le blanc','le Lyonnais','le Corse','les grands pieds','le jeune','le vieux','la sèche','la bricole','le rital','l américain','l italien','le sarde','le sicilien','le nain','le pingouin','l anglais','le tricheur','le samosa','le chinois','le chinetoc','le chanteur','la bomba','la gaufre','le magicien','porte-avions','le tatoué','le manchot','le bandit','l araignée','le cancrelat','le romano','le niçois','la volaille','le boucher','le serrurier','le lièvre','la tortue','le portugais','la pieuvre','le frelon','bouche-sèche','la sèche','l indien','la millionaire','l empereur','le crabe','le soviet','le gangster','téléphone','PMU','loto','le solitaire','tape-à-l oeil','le squelette','le batard','dos-d Azur','dos brulant','visage pâle','le chanceux','London','zozo'];


app.use("/stylesheets", express.static(__dirname + "/stylesheets"));
app.use("/javascript", express.static(__dirname + "/javascript"));
// app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    generateName()
        .then(function (mobName) {
            console.log('will render '+ mobName);
            res.render('index', {
                title: 'Cyanus Generator',
                message: mobName
            });
        });
});


function generateName() {
    return new Promise(function (resolve, reject) {
        console.log('whaddup?');
        resolve(shuffle.pick(names.concat(menNames)) + ' ' + shuffle.pick(adjs));
    });
}

var port = process.env.PORT || 3000;
app.listen(port);