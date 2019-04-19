const express = require('express');
const helmet = require('helmet');
const server = express();

const PORT = 5000;

server.use(helmet());
server.use(express.json());

server.listen(PORT);

module.exports = server;