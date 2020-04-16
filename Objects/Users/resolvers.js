require('dotenv').config();
const {ApolloError} = require('apollo-server');

const User = require('./User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.find().populate('role');
      return users;
    },
  },

  Mutation: {
    createUser: async (parent, {user}, ctx) => {
      const hashedPw = await bcrypt.hash(user.password,
          +process.env.PASSWORD_SALT);
      const newUser = new User({
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: hashedPw,
        role: user.role,
      });
      const createdUser = await newUser.save();
      return createdUser;
    },
    // logowanie
    login: async (parent, {loginData}, ctx) => {
      const user = await User.findOne({email: loginData.email}).populate('role');

      if (!user) {
        throw new ApolloError('User not found.', '401');
      }
      const isEqual = await bcrypt.compare(loginData.password, user.password);

      if(!isEqual){
        throw new ApolloError('Data is invalid', '401');
      }
      const token = jwt.sign(
          {data: user},
          process.env.JWT_SALT,
          {expiresIn: '2h'},
      );

      return {
        _id: user._id,
        token: token,
        name: user.name,
        surname: user.surname,
        role: user.role,
      };

    },

  },

};

const resolversMap = {
  'getUsers': 'Pobieranie użytkoników',
  'createUser': 'Tworzenie użytkowników',
  'login': 'Logowanie',
};

module.exports = {
  resolvers,
  resolversMap,
};
