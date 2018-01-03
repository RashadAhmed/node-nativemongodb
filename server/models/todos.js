var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: { type: String, required: true, minlength: 2, trim: true },
    completed: { type: Boolean, default: false },
    completedAt: { type: Number, default: null }

});

module.exports = { Todo };

// {

// var newTodo = new Todo({
//     text: 'Hello Fuckin Mongoose',
//     completed: true,
//     completedAt: new Date().getFullYear()
// })
// newTodo.save().then(function(doc) {
//     console.log('Saved', doc)
// }, function(e) {
//     console.log('Unable to connect')
// });

// var otherTodo = new Todo({
//     text: 'a7aaa',
//     completed: false,
//     completedAt: 50
// })
// otherTodo.save().then(function(doc) {
//     console.log(JSON.stringify(doc, undefined, 2))
// }, function(e) {
//     console.log('Errrrrrrrrrrrrrror')
// })
// }