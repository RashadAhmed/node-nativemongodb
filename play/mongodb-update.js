 //const MongoClient = require('mongodb').MongoClient;
 const { MongoClient, ObjectID } = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
     if (err) {
         return console.log('canot connect to Db');
     }
     console.log('Sucsess to get connect');

     db.collection('Users').findOneAndUpdate({
         _id: new ObjectID('5a49eef51c001d11ecff3772')
     }, {
         $set: {
             name: 'Ha Hemida'
         },

         $inc: {
             age: 2
         }
     }, {
         returnOriginal: false
     }).then(function(result) {
         console.log(result)
     })

     db.collection('Todos').findOneAndUpdate({
             _id: new ObjectID('5a49da1d1c001d11ecff2e10')
         }, {
             $set: {
                 completed: true
             }
         }, {
             returnOriginal: false
         }).then(function(result) {
             console.log(result)
         })
         //  db.close();
 });