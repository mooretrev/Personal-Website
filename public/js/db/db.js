const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Personal-Website:AsUmXf1KuRHfilqp@cluster0.e4wxl.mongodb.net/dev?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("dev").collection("maxes");

  const doc = collection.find().toArray()
  console.log(doc)
  doc.then(function (data){
    console.log(data)
  })
  .catch(function (err){
    console.log(err)
  })
  client.close();
});
