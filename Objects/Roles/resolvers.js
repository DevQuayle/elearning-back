const Role = require('./Role');
const checkAllow = require('../../middelwares/checkAllow');

const resolvers = {

  Query: {
    getRoles: async (_, __, ctx) => {
      checkAllow(ctx, 'getRoles');
      const allroles = await Role.find();
      return allroles;
    },
  },

  Mutation: {
    createRole: async (parent, {role}, ctx) => {
      const newRole = new Role({
        key: role.key,
        name: role.name,
        permissions: role.permissions,
      });
      const createdRole = await newRole.save();
      return createdRole;
    },
  },

};

const resolversMap = {
  'getRoles': 'Pobieranie ról użytkowników',
  'createRole': 'Pobieranie ról użytkowników',
};

module.exports = {
  resolvers,
  resolversMap,
};
