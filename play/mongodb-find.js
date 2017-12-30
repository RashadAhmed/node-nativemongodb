 //const MongoClient = require('mongodb').MongoClient;
 const { MongoClient, ObjectID } = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
     if (err) {
         return console.log('canot connect to Db');
     }
     console.log('Sucsess to get connect');
     //  db.collection('Todos').find({
     //      _id: new ObjectID('5a466504879b4c1ac410edba')
     //  }).toArray().then(function(docs) {
     //      console.log('Todos')
     //      console.log(JSON.stringify(docs, undefined, 2))
     //  }, function(err) {
     //      console.log('unable to find', err)
     //  })

     db.collection('Users').find({ name: 'Eslam Hemida' }).count().then(function(count) {
         console.log(`Todos count ${count}`)
             // console.log(JSON.stringify(docs, undefined, 2))
     }, function(err) {
         console.log('unable to find', err)
     })
     db.close();
 });