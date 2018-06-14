import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerScreens from './src/screens';

import reducers from './src/redux/reducers';
import { ROUTES } from './src/constants';


console.disableYellowBox = true;

export const store = createStore(reducers, applyMiddleware(thunk));

registerScreens(store, Provider);

export default class App extends Component {

  constructor(props) {
    super(props);
    Navigation.startSingleScreenApp({
      screen: {
        screen: ROUTES.LOGIN,
      },
      appStyle: {
        orientation: 'portrait',
      },
      animationType: 'slide-down'
    });
  }
}

