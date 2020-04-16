const {School} = require('./School');
const {resolvers, resolversMap} = require('./resolvers');
const {typeDef} = require('./typeDef');

module.exports = {
  School,
  resolvers,
  typeDef,
  resolversMap,
};
