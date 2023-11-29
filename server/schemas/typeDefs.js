// const { gql } = require('apollo-server-express');

const typeDefs = `
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    books: [Book]  
    user(userId: ID!): User
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: String!, description: String!, title: String!, bookId: String!, image: String!, link: String!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
