import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import firebase from 'firebase';

import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDHJEDEq3i4CwBv68DbdkEqg1GfZbu81G8',
      authDomain: 'manager-d824e.firebaseapp.com',
      databaseURL: 'https://manager-d824e.firebaseio.com',
      projectId: 'manager-d824e',
      storageBucket: 'manager-d824e.appspot.com',
      messagingSenderId: '948134977651'
  };

    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
