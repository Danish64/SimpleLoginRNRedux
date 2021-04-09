import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import SimpleLogin from './src/SimpleLogin';
const App = () => {
  return (
    <Provider store={store}>
      <SimpleLogin />
    </Provider>
  );
};

export default App;
