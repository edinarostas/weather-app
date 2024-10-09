import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import Weather from './components/Weather';
import './App.scss';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Weather />
      </div>
    </ApolloProvider>
  );
};

export default App;