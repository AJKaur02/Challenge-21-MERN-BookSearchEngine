import { gql } from "@apollo/client";

// Query to get a single user by ID or username
export const GET_SINGLE_USER = gql`
  query getSingleUser($getSingleUserId: ID, $username: String) {
    getSingleUser(id: $getSingleUserId, username: $username) {
      _id
      email
      username
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

// Query to get the current authenticated user
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
