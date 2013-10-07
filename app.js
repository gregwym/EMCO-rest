var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data/vendorDB.sqlite', sqlite3.OPEN_READONLY);

app.set('port', process.env.PORT || 3000);
app.set('views', 'views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.static('build'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({
  secret: 'your secret here'
}));

app.get('/vendor', function(req, res) {
  db.all('select * from vendors', {}, function(err, rows) {
    if (err) { return res.json(err); }
    res.json(rows);
  });
});

app.get('/vendor/:id', function(req, res) {
  db.get('select * from vendors where id = $id', { $id: req.params.id }, function(err, row) {
    if (err) { return res.json(err); }
    res.json(row);
  });
});

app.get('/vendor/:id/products', function(req, res) {
  db.all('select * from products where vID = $id', { $id: req.params.id }, function(err, rows) {
    if (err) { return res.json(err); }
    res.json(rows);
  });
});

app.get('/product/:id', function(req, res) {
  db.get('select * from products where id = $id', { $id: req.params.id }, function(err, row) {
    if (err) { return res.json(err); }
    res.json(row);
  });
});

app.get('/product/:id/documents', function(req, res) {
  db.all('select * from documents where pID = $id', { $id: req.params.id }, function(err, rows) {
    if (err) { return res.json(err); }
    res.json(rows);
  });
});

app.listen(app.get('port'));
console.log('App start listening on port ' + app.get('port'));
