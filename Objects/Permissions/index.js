const {Permission} = require('./Permission');
const {resolvers, resolversMap} = require('./resolvers');
const {typeDef} = require('./typeDef');

module.exports = {
  Permission,
  resolvers,
  typeDef,
  resolversMap,
};
