var mongoose = require('./db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var { Todo } = require('./models/todos');
var { User } = require('./models/users');

var app = express();
app.use(bodyParser.json());

app.post('/todos', function(req, res) {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then(function(doc) {
        res.send(doc)
    }, function(e) {
        res.status(400).send(e)
    });
});

app.listen(3000, function() {
    console.log('Connecting on port 3000')
})