import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'misc/redux/configureStore';
import rootReducer from './reducers';
import Main from './containers/Main';

const Index = () => {
  const store = configureStore(rootReducer);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default Index;