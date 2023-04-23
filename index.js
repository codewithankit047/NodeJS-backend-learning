// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// let database = "e-comm";
// const client = new MongoClient(url);

// async function getData() {
//   let result = await client.connect();
//   let db = result.db(database);
//   let collection = db.collection("Product");
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }

// getData();



const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='new'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('new');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();