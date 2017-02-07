import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
} from 'react-native';

import Login from './login';
import WelcomeBreeder from './welcomeBreeder';
import WelcomePetParent from './welcomePetParent';

export default class Pawpulace extends Component {
  render(){
    return (
      <Navigator
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
      />
    )
  }
  renderScene(route, navigator) {
    if(route.name == 'Login') {
        return <Login navigator={navigator} />
    }
    if(route.name == 'WelcomeBreeder') {
        return <WelcomeBreeder navigator={navigator} />
    }
    if(route.name == 'WelcomePetParent') {
        return <WelcomePetParent navigator={navigator} />
    }
  }
}

AppRegistry.registerComponent('Pawpulace', () => Pawpulace);
