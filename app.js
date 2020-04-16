require('dotenv').config();

const mongoose = require('mongoose');
const {ApolloServer, gql} = require('apollo-server');

const users = require('./Objects/Users');
const roles = require('./Objects/Roles');
const permissions = require('./Objects/Permissions');
const schools = require('./Objects/Schools');
const isAuth  = require('./middelwares/isAuth');

const td = gql`
    type Query
    type Mutation
`;

const typeDefs = [
  td,
  users.typeDef,
  roles.typeDef,
  permissions.typeDef,
  schools.typeDef,
];

const resolvers = [
  users.resolvers,
  roles.resolvers,
  permissions.resolvers,
  schools.resolvers,
];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatResponse: (response, requestContext) => {

    if (requestContext.response && requestContext.response.http && requestContext.context._token) {
      requestContext.response.http.headers.set('_token', requestContext.context._token);
    }
    return response ;
  },

  context: ({req,res}) =>{
    const {data, token} = isAuth(req);

    return{
      user: data,
      _token: token
    }
  }
});


mongoose.connect(process.env.DB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true},
).then(result => {

  const permissionSeeder = require('./seeders/permissionSeeder');
  permissionSeeder.seedPermission();

  const roleSeeder = require('./seeders/rolesSeeder');
  roleSeeder.setAllRoles();

  server.listen({port: process.env.PORT}, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  })
}).catch(err => console.log(err));



