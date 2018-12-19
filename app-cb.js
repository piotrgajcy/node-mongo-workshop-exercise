const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      db.collection("users").find({}).toArray((err, result) => {
          if (err) throw err;
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.write(JSON.stringify(result));          
          res.end();
      });
  });
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
