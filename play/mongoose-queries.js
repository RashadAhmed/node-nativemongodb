const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');
const { ObjectID } = require('mongodb');
const { Users } = require('./../server/models/users');


var id = '5a4e06a4efa7fe6e3ea6f038';
if (!ObjectID.isValid(id)) {
    console.log('Invaild ID');
};
Todo.find({
    _id: id
}).then(function(todos) {
    console.log('Todos', todos)
}, function(e) {

});

Todo.findOne({
    _id: id
}).then(function(todo) {
    console.log('Todo', todo)
}, function(e) {

});

Todo.findById(id).then(function(todo) {
    if (!todo) {
        return console.log('Not Found');
    }
    console.log('Todo By ID ', todo);

});


// Users.find().then(function(user) {
//     if (!user) {
//         return console.log('Unable to find user');
//     }

//     console.log(JSON.stringify(user, undefined, 2));
// }, (e) => {
//     console.log(e);
// });