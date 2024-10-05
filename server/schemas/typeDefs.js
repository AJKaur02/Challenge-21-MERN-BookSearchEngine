// Updated typeDefs.js

module.exports = `
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID!
        username: String
        email: String
        savedBooks: [Book]
    }

    type Auth {
        token: String
        user: User  # Add user field here
    }

    input BookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        getSingleUser(id: ID, username: String): User
        me: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(input: BookInput!): User
        deleteBook(bookId: ID!): User
    }
`;
