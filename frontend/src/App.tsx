import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import necessary modules from react-router-dom
import client from './ApolloClient';
import HomePage from './pages/HomePage';
import './App.scss';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
