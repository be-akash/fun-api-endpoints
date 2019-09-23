const redis = require('redis');
// create and connect redis client to local instance.
const client = redis.createClient();

// Print redis errors to the console
client.on('error', (err) => {
  console.log("Error " + err);
});
console.log("runing...");
module.exports=client;