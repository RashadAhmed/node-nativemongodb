 const MongoClient = require('mongodb').MongoClient;
 MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
     if (err) {
         return console.log('canot connect to Db');
     }
     console.log('Sucsess to get connect');

     //  db.collection('Todos').insertOne({
     //      text: 'something to do!',
     //      completed: false
     //  }, function(err, result) {
     //      if (err) {
     //          return console.log('Unable to insert', err)
     //      }
     //      console.log(JSON.stringify(result.ops, undefined, 2));
     //  })

     db.collection('Users').insertOne({
         name: 'Ahmed Hemida',
         age: 38,
         location: 'Cairo, Egypt'
     }, function(err, result) {
         if (err) { return console.log('Unable to Insert', err) }
         console.log(JSON.stringify(result.ops, undefined, 2));
     })
     db.close();
 });