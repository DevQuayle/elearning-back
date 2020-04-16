const {gql} = require('apollo-server');

const dataTypes = gql`  
    type User {
        _id     :ID
        name    : String
        surname : String
        email   : String
        role    : Role
    }
  
  
  type AuthData {
      _id     : ID
      token   : String
      name    : String
      surname : String
      email   : String
      role    : Role
  }
`;

const inputTypes = gql`
    input UserInput {
        name     : String
        surname  : String
        email    : String
        password : String
        role     : String
    }
  
  input LoginDataInput {
      email     : String
      password  : String
  }
`;

const typeDef = gql`

    ${dataTypes}
    ${inputTypes}

   extend type Query {
        getUsers: [User]
       
    }

    extend type Mutation {
        createUser(user: UserInput): User
        login(loginData: LoginDataInput): AuthData
    }
`;

module.exports = {
  typeDef,
};
