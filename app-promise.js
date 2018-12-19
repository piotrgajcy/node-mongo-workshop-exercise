const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';
const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer();
server.on('request', (req, res) => {
  MongoClient.connect(url)
  .then((db) => db.collection("users").find({}).toArray())
  .then((result) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(result));          
    res.end();
  })
  .catch((err) => {
    throw err;
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
