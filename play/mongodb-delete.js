 //const MongoClient = require('mongodb').MongoClient;
 const { MongoClient, ObjectID } = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
     if (err) {
         return console.log('canot connect to Db');
     }
     console.log('Sucsess to get connect');

     //deleteMany
     //  db.collection('Todos').deleteMany({ text: 'i want to eat' }).then(function(result) {
     //          console.log(result);
     //      })
     //deleteOne
     //  db.collection('Todos').deleteOne({ text: 'i want to eat' }).then(function(result) {
     //          console.log(result);
     //      })
     //findOneAndDelete
     db.collection('Users').findOneAndDelete({ _id: new ObjectID('5a468d7a5b3ed41f10a7135e') }).then(function(result) {
         console.log(JSON.stringify(result, undefined, 2));
     })

     //  db.close();
 });