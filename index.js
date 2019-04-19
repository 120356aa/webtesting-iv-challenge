const express = require('express');
const helmet = require('helmet');
const server = express();

const PORT = 6000;

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.listen(PORT);

module.exports = server;