import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'misc/redux/configureStore';
import rootReducer from './reducers';
import BookForm from './containers/BookForm';

const Index = () => {
  const store = configureStore(rootReducer);

  return (
    <Provider store={store}>
      <BookForm />
    </Provider>
  );
};

export default Index;