const Permission = require('./Permission');

const resolvers = {
  Query: {
    getPermissions:  async () => {
      const allPermisions = await Permission.find();
      return allPermisions;
    }
  }
};


const resolversMap = {
  'getPermissions': 'Lista dostępnych akcji',
}

module.exports = {
  resolvers,
  resolversMap
};
