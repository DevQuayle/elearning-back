const {gql} = require('apollo-server');

const dataTypes = gql`  
    type School {
        _id     :ID
        name    : String
        surname : String
        email   : String
        role    : Role
    }
`;

const inputTypes = gql`
    input SchoolInput {
        name     : String
        surname  : String
        email    : String
        password : String
        role     : ID
    }
`;

const typeDef = gql`

    ${dataTypes}
    ${inputTypes}

   extend type Query {
        getSchools: [School]
    }
  
`;

module.exports = {
  typeDef,
};
