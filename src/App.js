import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'react-native-firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyCTYH1dbdEaY2zh9tNMRT1CBqSDQcwQnBw',
      authDomain: 'authorization-5066d.firebaseapp.com',
      databaseURL: 'https://authorization-5066d.firebaseio.com',
      projectId: 'authorization-5066d',
      storageBucket: 'authorization-5066d.appspot.com',
      messagingSenderId: '780587295236'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
