const {Book} = require('./User');
const {resolvers, resolversMap} = require('./resolvers');
const {typeDef} = require('./typeDef');

module.exports = {
  Book,
  resolvers,
  typeDef,
  resolversMap,
};
