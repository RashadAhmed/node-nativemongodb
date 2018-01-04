var mongoose = require('./db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var { Todo } = require('./models/todos');
var { User } = require('./models/users');
const { ObjectID } = require('mongodb');

var app = express();
var port = process.env.PORT || 3000;
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

app.get('/todos', function(req, res) {
    Todo.find().then(function(todo) {
        res.send({ todo })
    }, function(e) {
        res.status(400).send(e);
    });
});
app.get('/todos/:id', function(req, res) {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(400).send()
    }
    Todo.findById(id).then(function(todo) {
        res.send(todo)
    }).catch(function(e) {
        res.status(400).send()

    })
})
app.listen(port, function() {
    console.log(`starting on port: ${port}`);
});