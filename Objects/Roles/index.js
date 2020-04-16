const {Role} = require('./Role');
const {resolvers, resolversMap} = require('./resolvers');
const {typeDef} = require('./typeDef');

module.exports = {
  Role,
  resolvers,
  typeDef,
  resolversMap,
};
