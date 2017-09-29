var express = require('express')
var app = express()
var sql = require('./server/connect')
var bodyParser = require('body-parser')
var fs = require('fs')
var path = require('path')

sql.connect()
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  next()
})

// post 
app.use(bodyParser.urlencoded({ 'limit': '10000kb', 'extended': true}))
app.post('/', function (req, res) {})

app.post('/register', function (req, res) {
  sql.query('SELECT `username` FROM `users` WHERE `username`="' + req.body.username + '"', function (err, rows) {
    console.log(rows)
    if (err || rows.length == 0) {
      sql.query('insert  into users set ?' , {username: req.body.username}, function (err, rows) {
        if (err) {
          res.send({code: 0,ms: ' server down '})
        }else {
          res.send({code: 1})
        }
      })
    }else {
      res.send({code: 0,ms: 'your name is taken'})
    }
  })
})

app.post('/login', function (req, res) {
  sql.query('SELECT `username` FROM `users` WHERE `username`="' + req.body.username + '"', function (err, rows) {
    if (err || rows.length == 0) {
      console.log(err)
      res.send({code: 0})
    }else {
      res.send({code: 1})
    }
  })
})

app.post('/thingspage', function (req, res) {
  sql.query('SELECT `thignstodo` FROM `thingsToDo`', function (err, rows) {
    if (err || rows.length == 0) {
      console.log(err)
      res.send({code: 0})
    }else {
      res.send(rows)
    }
  })
})
app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/src`));
app.use(express.static('public')); 


var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('http://localhost:', port)
})