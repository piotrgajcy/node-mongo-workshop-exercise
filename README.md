####1. Run your MongoDB GUI 
####2. Copy db name to:
`const url = 'mongodb://localhost:27017/dbName'` (line 3)
####3. Copy collection name to:
`db.collection("collectionName")` (line 10)
####4. Run command:
`node app-cb.js` (for callback version)
or
`node app-promise.js` (for promise version)