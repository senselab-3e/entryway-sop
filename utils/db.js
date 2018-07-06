const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const db;
/*
HERE IS THE INFORMATION ON INSERTING, DELETING, UPDATING, ETC.
https://www.npmjs.com/package/mongodb
*/
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db = client.db(dbName);
    client.close();
  });

module.exports = db;