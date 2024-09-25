import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import AppNavbar from './components/Navbar'; // Make sure this is the correct import for your Navbar

// Construct the main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Set up the context for authorization headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <AppNavbar /> {/* Updated navbar component */}
          <div className="app-content"> {/* Optional: Add a wrapper for styling */}
            <Routes>
              <Route path='/' element={<SearchBooks />} />
              <Route path='/saved' element={<SavedBooks />} />
              <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
            </Routes>
          </div>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
