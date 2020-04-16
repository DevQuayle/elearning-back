const School = require('./School');

const resolvers = {
  Query: {
    getSchools: async () => {
      const schools = await School.find();
      return schools;
    },
  },

};


const resolversMap = {
  'getSchools': 'Pobieranie szkół',
}


module.exports = {
  resolvers,
  resolversMap
};
