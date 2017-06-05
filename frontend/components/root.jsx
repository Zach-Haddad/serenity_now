import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';

const Root = ({ store, analyser }) => (
    <Provider store={store}>
      <App analyser={analyser}/>
    </Provider>
  );

export default Root;
