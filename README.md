# Book Search Engine with GraphQL

## Description

This project is a Book Search Engine built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to search for books using the Google Books API and save their favorite books to their account. The application has been refactored to use GraphQL with Apollo Server instead of a RESTful API.

## Features

- Search for books using the Google Books API.
- Save and manage favorite books.
- User authentication with signup and login functionality.
- View and manage saved books.
- Responsive UI with intuitive user experience.

## Technologies Used

- **Front-End:**
  - React
  - Apollo Client
  - CSS

- **Back-End:**
  - Node.js
  - Express.js
  - Apollo Server
  - MongoDB (using Mongoose)

- **Database:**
  - MongoDB Atlas

- **Deployment:**
  - Render
  
## Installation

1. **Clone the Repository:**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/AJKaur02/Challenge-21-MERN-BookSearchEngine
   ```

   Navigate into the project directory:

   ```bash
   cd book-search-engine
   ```

2. **Install Backend Dependencies:**

   Change to the `server` directory and install the backend dependencies:

   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies:**

   Change to the `client` directory and install the frontend dependencies:

   ```bash
   cd ../client
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the `server` directory with the following example content:

   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   SECRET_KEY=your_secret_key
   ```

   Replace `your_mongodb_atlas_connection_string` and `your_secret_key` with your actual MongoDB connection string and secret key.

5. **Start the Application:**

   - **Start the Backend Server:**

     From the `server` directory, run:

     ```bash
     npm start
     ```

   - **Start the Frontend Application:**

     From the `client` directory, run:

     ```bash
     npm start
     ```

## Usage

1. **Search for Books:**

   - Open the application in your browser.
   - Navigate to the search page.
   - Enter a book title or keyword into the search field.
   - Click "Search" to see the search results.

2. **Save Books:**

   - In the search results, click "Save This Book!" under any book you want to save.

3. **View Saved Books:**

   - Click on the "Saved Books" menu option to view and manage your saved books.

4. **Login/Signup:**

   - Click "Login/Signup" to open the authentication modal.
   - Select either "Login" or "Signup".
   - Enter your credentials and click the respective button to log in or sign up.

5. **Logout:**

   - Click "Logout" to end your session and return to the home page.

## Contributing

Contributions are welcome! You can open issues or submit pull requests to suggest improvements or fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

