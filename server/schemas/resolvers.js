const { User, Book } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('books');
    },
    books: async () => {
      return await Book.find({}).populate('users');
    },
    user: async (parent, args) => {
      return await User.findById(args.id).populate('books');
    },
  },
};

module.exports = resolvers;
