const knex = require('knex');
const knexConfig = require('./knexConfig.js');

module.exports = knex(knexConfig.development);