import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';
import { containerStyles, titleStyles } from '../styles/styles';

const App = () => {
  return (
    <Provider store={store}>
      <div style={containerStyles}>
        <h1 style={titleStyles}>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
