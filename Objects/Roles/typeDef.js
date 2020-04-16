const {gql} = require('apollo-server');

const dataTypes = gql`
    type Role {
        _id         : ID
        key         : String
        name        : String
        permissions : [String]
    }
`;

const inputTypes = gql`
    input roleInput{
        key         : String
        name        : String,
        permissions : [String]
    }
`;

const typeDef = gql`
    
    ${dataTypes}
    ${inputTypes}
    
    extend type Query {
        getRoles: [Role]
    }
    
    extend type Mutation {
        createRole(role: roleInput): Role
    }
    
`;

module.exports = {
  typeDef,
};
