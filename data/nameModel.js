const db = require('../dbConfig.js');

module.exports = {
  insert,
  remove
}

function insert(body) {
  return db('name')
    .insert(body)
    .then(ids => ids[0]);
};

function remove(id) {
  return db('name')
    .remove(id);
};