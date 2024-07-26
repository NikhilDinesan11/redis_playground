const Redis = require('ioredis');
const client = new Redis();

client.on('connect', () => {
    console.log('Connected to Redis');
  });

client.on('error', (err) => {
    console.error('Redis Error:', err);
  });

module.exports = client;
