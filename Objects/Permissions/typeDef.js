const {gql} = require('apollo-server');

const dataTypes = gql`
    type Permission {
        _id         :ID
        key         : String
        name        : String
    }
`;

const typeDef = gql`
    ${dataTypes}
    
    extend type Query {
        getPermissions: [Permission]
    }

`;

module.exports = {
  typeDef,
};
