# Book Search Engine with GraphQL

## Description

This project is a book search engine that has been refactored from a RESTful API to a GraphQL API using Apollo Server. Originally built with the MERN stack (MongoDB, Express.js, React, Node.js), the application allows users to search for books via the Google Books API and manage their saved books. The goal of this project is to demonstrate the transformation of a RESTful API to a GraphQL API while maintaining user functionality and performance.

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.
3. Create an Apollo Provider so that requests can communicate with an Apollo Server.
4. Deploy your application to Render with a MongoDB database using MongoDB Atlas. Use the [Deploy with Render and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-render-and-mongodb-atlas) walkthrough for instructions.

## User Story

    AS AN avid reader
    I WANT to search for new books to read
    SO THAT I can keep a list of books to purchase

## Features

    - Search for books using the Google Books API.
    - Save and manage favorite books.
    - User authentication with signup and login functionality.
    - View and manage saved books.
    - Responsive UI with intuitive user experience.

### Search Functionality

Users can search for books by typing a term (e.g., "star wars") into the search box:

![Search Books](./Assets/21-mern-homework-demo-01.gif)

### Save Book

Users can save books by clicking "Save This Book!" under each search result:

![Save Book](./Assets/21-mern-homework-demo-02.gif)

### View Saved Books

Users can view and manage their saved books on a separate page:

![Saved Books](./Assets/21-mern-homework-demo-03.gif)

## Implementation

### Back-End

1. **Apollo Server Setup**

   - Implemented Apollo Server in `server.js`.
   - Replaced RESTful routes with GraphQL queries and mutations.

2. **Authentication Middleware**

   - Updated `auth.js` middleware to support GraphQL.

3. **GraphQL Schema**
   - Defined types, queries, and mutations in `typeDefs.js` and `resolvers.js`.
   - Types include `User`, `Book`, and `Auth`.
   - Queries and mutations handle user authentication and book management.

### Front-End

1. **Apollo Client Integration**

   - Set up Apollo Provider in `App.jsx`.
   - Updated `queries.js` and `mutations.js` to work with Apollo.

2. **Components**
   - **`SearchBooks.jsx`**: Uses Apollo’s `useMutation()` for saving books.
   - **`SavedBooks.jsx`**: Utilizes `useQuery()` for fetching saved books and `useMutation()` for removing books.
   - **`SignupForm.jsx`**: Replaces old signup functionality with `ADD_USER` mutation.
   - **`LoginForm.jsx`**: Replaces old login functionality with `LOGIN_USER` mutation.

## Deployment

Deploy the application using Render and MongoDB Atlas. Follow the [Deploy with Render and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-render-and-mongodb-atlas) guide for instructions.

## Contributing

Contributions are welcome! You can open issues or submit pull requests to suggest improvements or fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
