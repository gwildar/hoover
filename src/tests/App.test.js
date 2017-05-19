import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import AppContainer from '../containers/AppContainer';

// use default store
const store = configureStore();

const baseApp =
<Provider store={store}>
    <AppContainer />
</Provider>;

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(baseApp, div);
  });
})
